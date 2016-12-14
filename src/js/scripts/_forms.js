$(document).ready(function(){
  forms.init();
});

var forms = {
  init: function(){
    this.controls();
  },
  addBlock: function(model){
    var clone = model.clone();
    var label = clone.attr('data-label');
    var blocksLength = $(".block-repeater[data-label="+ label +"]").length + 1;
    var nextBlocks = model.nextAll(".block-repeater[data-label="+ label +"]").length;
    var last = model;
    if(nextBlocks)
      last = model.nextAll(".block-repeater[data-label="+ label +"]").last();

    clone.find('.form-header').text(label + blocksLength);

    clone.find('.form-group').each(function(){
      var input = $(this).find('.form-control');
      var name = input.attr('data-name');

      input.attr('id', name + '-' + blocksLength);

      $(this).val('');
      $(this).find('label').attr('for', name + '-' + blocksLength);
    });

    autosize(clone.find('.form-textarea'));

    last.after(clone);
  },
  removeBlock: function(block){
    var label = block.attr('data-label');
    var siblings = block.siblings('.block-repeater[data-label=' + label + ']');
    if(siblings.length > 0){
      block.remove();
      this.updateBlocks(siblings);
    }
  },
  updateBlocks: function(blocks){
    blocks.each(function(index, block){
      var $block = $(block);
      var label = $(this).attr('data-label');
      var blockIndex = index + 1;
      $block.find('.form-header').text(label + blockIndex);

      $block.find('.form-group').each(function(){
        var input = $(this).find('.form-control');
        var name = input.attr('data-name');

        input.attr('id', name + '-' + blockIndex);

        $block.find('label').attr('for', name + '-' + blockIndex);
      });
    });
  },
  nextBlock: function(next, current){
    var nextBlock = next ? current.next('.card') : current.prev('.card');
    if(nextBlock.length)
      $("body, html").scrollTop(nextBlock.offset().top - $(".header").outerHeight(true));
  },
  controls: function(){
    var _this = this;
    $(".form").on('click', '.fa-plus', function(){
      var model = $(this).closest('.block-repeater');
      _this.addBlock(model);
    });

    $(".form").on('click', '.fa-minus', function(){
      var block = $(this).closest('.block-repeater');
      _this.removeBlock(block);
    });

    $(".form").on('click', '.fa-chevron-down', function(){
      var block = $(this).closest('.card');
      _this.nextBlock(true, block);
    });

    $(".form").on('click', '.fa-chevron-up', function(){
      var block = $(this).closest('.card');
      _this.nextBlock(false, block);
    });

    $(".form").on('focus', '.form-control', function(){
      var formGroup = $(this).closest('.form-group');
      formGroup.addClass('field-focused');
    });
    $(".form").on('focusout', '.form-control', function(){
      var formGroup = $(this).closest('.form-group');
      if($(this).val() !== ''){
        formGroup.removeClass('field-has-error');
        formGroup.addClass('field-filled');
      }
      else{
        formGroup.find('.field-error').slideUp();
        formGroup.removeClass('field-filled field-has-error field-focused');
      }
    });

    autosize($('.form-textarea'));
    $(".form-textarea").keyup(function(){
      var maxLength = $(this).attr('maxlength');
      var inputLength = $(this).val().split('').length;

      $(this).siblings('.textarea-length').text(inputLength + '/' + maxLength);
    });
  }
};
