import React from 'react'

function Profile() {
  return (
    <div class="profile">
    <div class="profile-header">
      <h1>Employee Profile</h1>
    </div>
    <div class="profile-body">
      <form action="">
        <p>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value="John Doe"/>
        </p>
        <p>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" value="john.doe@example.com"/>
        </p>
        <p>
          <label for="designation">Designation:</label>
          <input type="text" id="designation" name="designation" value="Software Engineer"/>
        </p>
        <p>
          <label for="location">Location:</label>
          <input type="text" id="location" name="location" value="San Francisco, CA"/>
        </p>
        <button href="#" class="edit-button">Save Changes</button>
      </form>
    </div>
  </div>
  
  )
}

export default Profile