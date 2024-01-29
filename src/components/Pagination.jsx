import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div className='flex mx-3 mb-10 ml-3 items-center'>
            {pageNumber.map(number => (
                <li key={number} className='flex items-center'>
                    <a href="!#" onClick={()=>paginate(number)} className='border border-slate-700 px-5 py-3'>
                        {number}
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Pagination;
