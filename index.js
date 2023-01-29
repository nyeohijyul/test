setInterval(()=>{

    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i)=>{
        a.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2F%25EC%258B%25AC%25EC%2598%2581-%25EA%25B3%25A0%25EC%259E%2590-%25EA%25B3%25A0%25EC%259E%2590%25EB%259D%25BC%25EB%258B%2588-%25ED%258F%25AD8-%25EC%2595%25BC%25EC%259D%25B8%25EC%258B%259C%25EB%258C%2580-gif-24872527&psig=AOvVaw33bFA1HGjtvlJC18X3Dwrf&ust=1674718227174000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJixvNqZ4vwCFQAAAAAdAAAAABAE'})
}, 500)