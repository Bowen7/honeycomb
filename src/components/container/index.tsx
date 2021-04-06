import React from "react"

function Container() {
  return (
    <>
      <div className="container">
        <div className="content">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          overflow: auto;
        }
        .content {
          margin: auto;
        }
      `}</style>
    </>
  )
}

export default Container
