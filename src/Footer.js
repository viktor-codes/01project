import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
        <p>
            {length ? `You have ${length} items in your list.` : "Your list is empty."}
        </p>
    </footer>
  )
}

export default Footer
