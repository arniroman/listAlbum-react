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
          pages: null
       }
   }

componentDidMount(){
    this.props.loadSometh()
}

getCurrentAlbums = (item) => {
    this.props.getCurrentAlbumId(item.id)
}

handelPageId = (item) => {
    this.setState({
        pages: item
    })
}

listAlbumsView = () => {
    let arrayList = this.props.albumData.data 
    let page = this.state.pages || 1
    let pages = []
    let perPage = 4
    let lastIndex = page * perPage
    let firstIndex = lastIndex - perPage
    let resultArray
    /** created resultArray for dosage of goods quantity */
    if(arrayList){
        resultArray = arrayList.slice(firstIndex,lastIndex)
    }
    /** writed in pages required quantity of numbers for pagination */
    if(arrayList){
        for(let i = 1; i <= Math.ceil(arrayList.length/ perPage); i++){
            pages.push(i)
        }
    }
      
    return(
        <div className='listWrapp-album' >
        <div className='listBox-wrapp' >
            {resultArray && resultArray.map((item,key) =>
                <div key={key}>
                    <Link to={`/currentAlbum/${item.id}`}>
                        <div className='listBox-album' >
                            <div>
                                <li className='listItems-album' onClick={(e)=>{this.getCurrentAlbums(item,e)}}>
                                    {item.title}
                                </li>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
        <div className='paginationBox'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map((item,key) =>
                        <li key={key} className="page-item">
                            <a className="page-link" onClick={(e)=>{this.handelPageId(item)}}>{item}</a>
                        </li>
                    )}
                    <li className="page-item">
                    </li>
                </ul>
            </nav>
        </div>
        </div>   
    )
}
   
render(){
        return(
            <div>
                <p className='titleAlbums'> Album Gallery </p>
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







