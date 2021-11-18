var moduleSelect = $(function () {
    $('.main__filters--search-input').focusin(function () {
        $('#searchImg').addClass('none');
    })

    $('.main__filters--search-input').focusout(function () {
        $('#searchImg').removeClass('none');
    })
})
module.exports = moduleSearch;
