import './css/profile.css'
import React, { useState } from 'react'
import TagsInput from 'react-tagsinput'
// import Tags from './Tags'
import './css/react-tagsinput.css'
import { WithContext as ReactTags } from 'react-tag-input';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import {useAuthValue} from './AuthContext'
import {signOut} from 'firebase/auth'
import { auth} from './firebase'

class Tags extends React.Component {
  constructor() {
    super()
    this.state = {tags: []}
  }

  handleChange = (tags) => {
    this.setState({tags})
  }

  render() {
    return <TagsInput value={this.state.tags} onChange={this.handleChange} />
  }
}

function Profile() {
  const {currentUser} = useAuthValue()
  const {currentName} = useAuthValue()
  const {currentBio} = useAuthValue()
  const {currentResidence} = useAuthValue()
  const [tags, setTags] = useState([]);
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  }
  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
  };
  return (
    <div className='top'>
        <>
        <Nav>
          <Bars />

          <NavMenu>
            <NavLink to='./learningSpace' activeStyle>Learning Space</NavLink>
          </NavMenu>
        </Nav>
        </>
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email} </p>
          <p><strong>Email verified: </strong> </p>
          {`${currentUser?.emailVerified}`}
          <p><strong>Name: </strong></p>
          {`${currentName?.name}`}
          <p><strong>Bio</strong></p>
          {`${currentBio?.biography}`}
          <p><strong>Country of residence</strong></p>
          {`${currentResidence?.country}`}
          <p><strong>Interests:</strong></p>
          <div>
            <ReactTags
            tags={tags}
            // handleDelete={handleDelete}
            // handleAddition={handleAddition}
            // handleDrag={handleDrag}
            // handleTagClick={handleTagClick}
            // inputFieldPostition="bottom"
            // autocomplete
            // editable
            />
          </div>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
