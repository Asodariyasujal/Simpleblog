import React from 'react'
import "./post.css"

function Post() {
  return (
    <div className='post'> 
      <img  className='postimg' src="https://thegoodnewshub.com/cdn-cgi/image/width=900,height=675,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2023/10/2000-year-old-makeup.webp" alt="ERROR" />
      <div className="postinfo">
        <div className="postcats">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
        </div>
        <span className="posttitle">A team of archaeologists in Turkey have found a haul of Roman makeup, dating back to over 2,000 years ago. The makeup includes blush and eyeshadow, with 10 hues of pigments in reds and pinks.</span>
        <hr/>
        <span className="postdata"> updateded: 1 hour ago</span>
      </div>
      <p className='postdesc'>
      “One of the most surprising findings was that we came across were makeup pigments similar to blush and eyeshadow used today,” Lead archaeologist, Professor Gökhan Coşkun of Dumlupinar University said. He went onto explain that the makeup was in various states of preservation:

“Of course, they are not in a very well-preserved state. Sometimes they are found in 1- or 2-millimeter pieces. We also found well-preserved pieces during the excavation.”
      </p>
    </div>
  )
}

export default Post