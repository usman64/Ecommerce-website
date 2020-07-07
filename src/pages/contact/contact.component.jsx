import React from 'react';
// import Iframe from 'react-iframe';

class Contact extends React.Component {
  state = {
    isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    isError: false,
  };

  componentWillMount() {
    // this.setState({isMobile:})
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '500px',
          width: '100%',
        }}
      >
        ... Development in Progress
        {/* {this.state.isMobile ? (
          'Mobile View Not supported. Please open on a Computer'
        ) : (
          <Iframe
            url='https://www.pushtable.com/project/crwn-clothing-db-f30dd/data'
            width='100%'
            height='500px'
            id='myId'
            className='myClassname'
            display='initial'
            position='relative'
            onError={() => this.setState({ isError: true })}
          />
        )}
        {this.state.isError ? 'Error' : null} */}
      </div>
    );
  }
}

export default Contact;
