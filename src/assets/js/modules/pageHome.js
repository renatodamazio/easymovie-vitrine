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

const Home = () => {
  $(document).ready(() => {
    filterCategoriesHome()
    filterVideos()
    carousel()
  })
}
export default Home
