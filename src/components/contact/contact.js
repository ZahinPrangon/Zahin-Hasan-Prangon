import React, { Component } from 'react';
import fire from './Fire';

class contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = fire.database().ref('form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, email, message } = snapshot.val();
      const data = { name, email, message };
      this.setState({ form: [data].concat(this.state.form) });
    })
  }

  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear the input
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      message: this.textAreaMessage.value
    };
    if (params.name && params.email && params.message) {
      fire.database().ref('form').push(params).then(() => {
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        this.showAlert('danger', 'Your message could not be sent');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Please fill the form');
    };
  }
  render() {
    return (

      <section class="mb-4">

      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

      <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>

      <div class="row">

          <div class="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                  <div class="row">

                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="name" name="name" class="form-control"/>
                              <label for="name" class="">Your name</label>
                          </div>
                      </div>

                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="email" name="email" class="form-control" />
                              <label for="email" class="">Your email</label>
                          </div>
                      </div>


                  </div>

                  <div class="row">
                      <div class="col-md-12">
                          <div class="md-form mb-0">
                              <input type="text" id="subject" name="subject" class="form-control" />>
                              <label for="subject" class="">Subject</label>
                          </div>
                      </div>
                  </div>

                  <div class="row">

                      <div class="col-md-12">

                          <div class="md-form">
                              <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                              <label for="message">Your message</label>
                          </div>

                      </div>
                  </div>


              </form>

              <div class="text-center text-md-left">
                  <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
              </div>
              <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                  <li><i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>San Francisco, CA 94126, USA</p>
                  </li>

                  <li><i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>+ 01 234 567 89</p>
                  </li>

                  <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                      <p>contact@mdbootstrap.com</p>
                  </li>
              </ul>
          </div>


      </div>

      </section>
    );
  }
}

export default contact;


      // <div>
      //   {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
      //     <div className='container'>
      //       {this.state.alertData.message}
      //     </div>
      //   </div>
      //   }
      //   <div class="d-flex justify-content-between">
      //       <div className="row">
      //         <div className='col'>
      //           <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >

      //             <div className='form-group'>
      //               <label id='label' htmlFor='name'>Name</label>
      //               <input type='text' className='' id='name' placeholder='Name' ref={name => this.inputName = name} />
      //             </div>

      //             <div className='form-group'>
      //               <label id='label' htmlFor='exampleInputEmail1'>Email</label>
      //               <input type='email' className='' id='email' placeholder='Email' ref={email => this.inputEmail = email} />
      //             </div>

      //             <div className='form-group'>
      //               <label id='label' htmlFor='message'>Message</label>
      //               <textarea className='' id='message' rows='3' ref={message => this.textAreaMessage = message}></textarea>
      //             </div>

      //             <button type='submit' id='submit' className='btn btn-primary'>Send</button>
      //           </form>
      //         </div>
      //         <div className='col'>
      //           Here it 
      //         </div>
      //       </div>

      //   </div>

      // </div>