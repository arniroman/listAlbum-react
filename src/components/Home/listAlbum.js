import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadSometh } from '../../logic'
import { getCurrentAlbumId } from '../../logic'
import '../../css/listAlbum.css'

class ListAlbum extends Component {
   constructor(props){
       super(props)
       this.state = {
          pages:''
       }
   }

componentDidMount(){
    this.props.loadSometh()
}

getCurrentAlbums = (item) => {
    this.props.getCurrentAlbumId(item.id)
}

paginationList = () => {
    let posts = this.props.albumData.data
    if(posts){
        this.setState({
            pages: posts.length
        })
    }
}

listAlbumsView = () => {
    let arrayList = this.props.albumData.data 


    if(arrayList){
        console.log(arrayList.length)
    }
        
    return(
        <div className='listWrapp-album' >
            {arrayList && arrayList.map((item,key) =>
            <div key={key} >
                <Link to={`/currentAlbum/${item.id}`}>
                <div className='listBox-album' >
                    <div>
                        <li className='listItems-album' onClick={(e) => {this.getCurrentAlbums(item,e)}}>
                            {item.title}
                        </li>
                    </div>
                </div>
                </Link>
            </div>
        )}
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
        </div>   
    )
}
   
render(){
        return(
            <div>
                <p className='titleAlbums'> Albums Gallery </p>
                {this.listAlbumsView()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        albumData: state.data,
    }
} 

export default connect(mapStateToProps,{loadSometh,getCurrentAlbumId})(ListAlbum)







