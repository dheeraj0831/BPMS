import React from 'react'

export default function Features() {
  return (
    <>
    <div className="mb-3">
    <label  className="form-label">Enter FeatureId</label>
    <input type="email" className="form-control" id="bugid"></input>
    </div>
    <div className="mb-3">
    <label  className="form-label">Enter Feature Description</label>
    <textarea className="form-control" id="bugdescription" rows="3"></textarea>
    </div>
    <div className="col-auto text-center">
    <button type="submit" className="btn btn-primary mb-3">Submit</button>
    </div>
    </>
  )
}
