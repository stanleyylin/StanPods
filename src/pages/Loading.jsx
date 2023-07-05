import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    "0": "white",
    "0.5": "white",
    "1.0": "white",
  },
  shadowBlur: 10
})

const Loading = () => {
  return (
    <div>
      <TopBarProgress />
    </div>
  )
}

export default Loading
