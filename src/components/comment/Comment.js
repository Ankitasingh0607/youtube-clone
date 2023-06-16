import React from 'react'
import moment from 'moment'
import './_comment.scss';

const Comment = ({comment}) => {

const {authorDisplayName,authorProfileImageUrl,publishedAt,textDisplay}=comment

  return (
    <div className='comment p-2 d-flex '>
         <img src={authorProfileImageUrl} alt="Avtar" 
          className='rounded-circle mr-3'/>

          <div className='comment__body m-4'>
            <p className='comment__header mb-1'>
                {authorDisplayName} {moment(publishedAt).fromNow()}
                <p className='mb-1'>{textDisplay}</p>
            </p>
          </div>
    </div>
  )
}

export default Comment