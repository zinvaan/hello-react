import React, {Component} from 'react';

class UpdateContent extends Component{

  render(){
    console.log('UdateContent data value(id):', this.props.data);
    console.log('UpdateContent render');
    return(
      <article>
        <h2>Update</h2>
        <form action='/create_process' method='post' 
        onSubmit={function(event){
          event.preventDefault();
          this.props.onSubmit(
            event.target.title.value,
            event.target.desc.value
          );
        }.bind(this)}>
          <p>
            <input 
            type='text'
            name='title' 
            placeholder='title'

            ></input>
          </p>
          <p>
            <textarea name='desc' placeholder='description'></textarea>
          </p>
          <p>
            <input type='submit'></input>
          </p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;