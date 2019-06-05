import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import propTypes from 'prop-types'
import PaginationStyle from './style';

export class Pagination extends Component {
    render(){
        const {meta, fetchProductList} = this.props
        return(
            <PaginationStyle >
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={meta.total}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={3}
                    onPageChange={(e) => fetchProductList(e.selected + 1)}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </PaginationStyle>
        )
    }
} 

Pagination.propTypes = {
    meta: propTypes.object,
    fetchProductList: propTypes.func
}
    
