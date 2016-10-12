(function ($) {
  Drupal.behaviors.awd_link_replacer = {
    attach: function (context, settings) {

      /**
       * Auto replacer.
       */
      var tip = Drupal.t('Click for replace')
      $('span.replacement', context).addClass('process').attr('title', tip).bind('click', function() {
        var val = $(this).context.innerText;
        $(this).closest('.form-type-textfield').find('input').focus().val(val).blur();
      });

      /**
       * Vertical tabs dynamic description.
       */

      // Input tab
      $('fieldset.awd-link-replacer-input-information', context).drupalSetSummary(function (context) {
        var base_path = $('.form-item-base-path input', context).val();
        return base_path ? Drupal.t('Only for: ') + base_path : Drupal.t('All links');
      });

      // Options tab
      $('fieldset.awd-link-replacer-options-information', context).drupalSetSummary(function (context) {
        var vals = [];

        $('input:checked', context).parent().each(function () {
          vals.push(Drupal.checkPlain($.trim($(this).find('label').text())));
        });

        return vals.join(', ');
      });

      // Output tab
      $('fieldset.awd-link-replacer-output-information', context).drupalSetSummary(function (context) {
        var vals = [],
          replace_path = $('.form-item-replace-path input', context).val();
        vals.push(replace_path ? Drupal.t('Replace with: ') + replace_path : Drupal.t('No replace path'));

        $('input:checked', context).parent().each(function () {
          vals.push(Drupal.checkPlain($.trim($(this).find('label').text())));
        });

        return vals.join(', ');
      });

    }
  };
})(jQuery);
