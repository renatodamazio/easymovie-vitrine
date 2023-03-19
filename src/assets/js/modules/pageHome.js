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
const Home = () => {
  $(document).ready(() => {
    filterVideos()
  })
}
export default Home
