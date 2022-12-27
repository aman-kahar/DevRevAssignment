import React from 'react'
import Cards from './Cards'


function MoviesList (){
    const Movies = [
        {
          id:1,
          title:"Avatar",
          duration:"3:45",
          img:'https://tse1.mm.bing.net/th?id=OIP.spLKiRHD5j8vLxQ29GGoZgHaK1&pid=Api&rs=1&c=1&qlt=95&w=85&h=124'
        },
        {
          id:2,
          title:"Joker",
          duration:"2:45",
          img:'https://tse1.mm.bing.net/th?id=OIP.oL8HzdJT37s55zyqV6m18QHaK8&pid=Api&rs=1&c=1&qlt=95&w=84&h=124'
        },
        {
          id:1,
          title:"Avatar",
          duration:"3:45",
          img:'https://tse1.mm.bing.net/th?id=OIP.spLKiRHD5j8vLxQ29GGoZgHaK1&pid=Api&rs=1&c=1&qlt=95&w=85&h=124'
        },
        {
          id:2,
          title:"Joker",
          duration:"2:45",
          img:'https://tse1.mm.bing.net/th?id=OIP.afsABCAa3Usml92oso_MCgHaJ3&pid=Api&rs=1&c=1&qlt=95&w=93&h=124'
        },
        {
          id:1,
          title:"Avatar",
          duration:"3:45",
          img:'https://tse1.mm.bing.net/th?id=OIP.spLKiRHD5j8vLxQ29GGoZgHaK1&pid=Api&rs=1&c=1&qlt=95&w=85&h=124'
        },
        {
          id:2,
          title:"Joker",
          duration:"2:45",
          img:'https://tse1.mm.bing.net/th?id=OIP.spLKiRHD5j8vLxQ29GGoZgHaK1&pid=Api&rs=1&c=1&qlt=95&w=85&h=124'
        }
    ]
    const movieList = Movies.map((movie,index) => <Cards key={movie.id} movie={movie}/>)
    return (<div style={{display:'flex', flexDirection:'row',padding:'80px'}}>{movieList}</div>)
}

export default MoviesList