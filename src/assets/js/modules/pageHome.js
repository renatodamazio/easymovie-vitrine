//
const filterVideos = () => {
  $('.filter-button').click(function () {
    $('.filter-button--active').removeClass('filter-button--active')

    $(this).addClass('filter-button--active')

    const class__hidden_video = 'card__videos--hidden-video'

    $(`.${class__hidden_video}`).removeClass(class__hidden_video)

    const category = $(this).data('button-category')

    const videos = $('.card__videos').filter(function () {
      const video = $(this).data('category')
      return video !== category && category !== 'all'
    })

    $(videos).addClass(class__hidden_video)
  })
}

const carousel = () => {
  const carousel_video = $(
    '.modal-portfolio__carousel__owl-slider'
  ).owlCarousel({
    items: 1,
    loop: true,
    dots: false,
  })

  $('.slide-control.arrow-left').click(() =>
    carousel_video.trigger('prev.owl.carousel')
  )
  $('.slide-control.arrow-right').click(() =>
    carousel_video.trigger('next.owl.carousel')
  )
}

const handleURL = () => {
  const url = new URL(window.location)

  $('.__handle-url').click(function (e) {
    e.preventDefault()
    const url = $(this).attr('href')

    window.history.pushState('Object', 'Categoria JavaScript', url)
    return
  })
}

const filterCategoriesHome = () => {
  $('.filter-home-button').click(function () {
    $('.filter-home-button.active').removeClass('active')

    $(this).addClass('active')

    const category = $(this).data('home-button')

    $('.category-home')
      .stop()
      .fadeOut(() => {
        $(`.category-home[data-home-category=${category}`).stop().fadeIn()
      })
  })
}

const readMoreLess = () => {
  let defaultHeight = 130
  let button = $('.read-more')

  button.click(function () {
    let newHeight = 0

    let text = $('.modal-portfolio__side-bar__description__text')
    let textHeight = text.find('p').css('height')
    text.css({ 'max-height': defaultHeight, overflow: 'hidden' })

    textHeight = textHeight ? parseInt(textHeight.replace('px', '')) : 100

    if (text.hasClass('active')) {
      newHeight = defaultHeight
      text.removeClass('active')
      button.text('Ver mais')
    } else {
      newHeight = textHeight + 30
      text.addClass('active')
      button.text('Ver menos')
    }
    text.animate(
      {
        height: newHeight,
        'max-height': newHeight,
      },
      500
    )
  })
}

const Home = () => {
  $(document).ready(() => {
    handleURL()

    $('.open-modal-portfolio').click(() => {
      $('.modal-portfolio').stop().fadeIn()
    })

    $('.modal-portfolio__close').click(() => {
      $('.modal-portfolio').stop().fadeOut()
      window.history.pushState('', '', "/")
    })
    filterCategoriesHome()
    filterVideos()
    readMoreLess()
    carousel()
  })
}
export default Home
