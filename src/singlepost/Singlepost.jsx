import React from 'react'
import "./singlepost.css"

function Singlepost() {
  return (
    <div className='singlepost'>
        <div className="singlepostwrapper">
          <img src="https://cdn-i.pr.trt.com.tr/trtworld/w664/h374/q70/17174578_0-0-2834-1524.jpeg" alt="ERROR" className="singlepostimg" />
          <h1 className="singleposttitle">
          Makeup pigments: blush and eyeshadow
          <div className="singlepostedit">
          <i className="singleposticon fa-solid fa-pen-to-square"></i>
          <i className="singleposticon fa-solid fa-trash"></i>
          </div>
          </h1>
          <div className="singlepostinfo">
            <span className="singlepostauthor">Author: <b> harsimula khan</b></span>
            <span className="singlepostdate">1 hour ago</span>

          </div>
          <p className='singlepostdesc'>Coskun emphasised that the predominant colors discovered were red and pink, with makeup pigments found in 10 different hues.

Located 57 kilometres from the Kutahya city center, the ancient site saw its golden age in the second and third centuries AD and became “the center of the episcopacy in the Byzantine era," according to the Turkish Culture and Tourism Ministry website.

Recent excavations around the Temple of Zeus indicate the existence of several levels of settlement in the city dating as far back as 3000 BC. In 133 BC, it was captured by the Roman Empire.

In 1824, European travelers rediscovered the ancient site.

Between 1970 and 2011, the German Archeology Institute unearthed a theater and a stadium, as well as two public baths, a gymnasium, five bridges, a trading building, necropolises and the sacred cave of Metre Steune – a cultist site thought to be used before the first century BC.</p>
          
        </div>
        </div>
  )
}

export default Singlepost