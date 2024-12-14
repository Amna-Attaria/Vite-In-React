import React from 'react'
import './FirstSection.css'
function FirstSection() {
  return (
   <>
<div className='first'>
<h1 className='d-flex justify-content-center two mt-5 text-center'>Create user interfacesbr <br /> from components </h1>
<p className='d-flex justify-content-center text-center mt-5'>React lets you build user interfaces out of individual pieces called components. <br /> Create your own React components like Thumbnail, LikeButton, and Video. <br /> Then combine them into entire screens, pages, and apps.</p>
</div>

<div className="container">
   <img src="/section.png"/>
</div>
<p className='text-center'>
Whether you work on your own or with thousands of other developers, using <br /> React feels the same. It is designed to let you seamlessly combine components <br /> written by independent people, teams, and organizations.
</p>
   </>
  )
}

export default FirstSection
