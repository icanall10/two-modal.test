(function ($) {

    $(document).ready(function () {


        $('.modal')
            .on('openModal', function () {
                $(this).addClass('open');
            })
            .on('closeModal', function () {
                $(this).removeClass('open');
            });


        $('[data-modal-link]')
            .click(function () {
                let selector = $(this).attr('data-modal-link');

                $(selector).trigger('openModal');

                return false;
            });


        $('.modal .close')
            .click(function () {
                let modal = $(this).closest('.modal');

                modal.trigger('closeModal');

                let next = modal.attr('data-modal-next') ?? '';

                if (next.length > 0) {
                    $(next).trigger('openModal');
                }

                return false;
            });

    });

})(jQuery);