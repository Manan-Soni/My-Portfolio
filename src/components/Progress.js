import React from 'react'

export default function Progress() {
  return (
    <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "1px"}}>
        <div class="progress-bar" style={{width: "25%"}}></div>
    </div>
  )
}
