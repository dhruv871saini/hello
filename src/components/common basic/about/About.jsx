import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
      <>

  <section id="about" class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2 class="text-uppercase">About Our Restaurant</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, nisi id volutpat consequat, velit orci laoreet justo, nec volutpat arcu neque eu est. Integer in lorem vel lacus convallis auctor eget sit amet dui.</p>
        <p>Mauris commodo risus eget leo semper, vel ultricies lacus auctor. Nulla id orci ut lectus consequat luctus. Nam id semper risus. Quisque mattis tortor a massa congue consectetur. Nam ac dictum lectus, sit amet pretium velit.</p>
      </div>
      <div class="col-lg-6">
        <img src="https://assets.architecturaldigest.in/photos/65eae121c9a4d9a4adf21375/16:9/w_2560%2Cc_limit/Untitled%2520design.jpg" alt="Restaurant Image" class="img-fluid rounded-circle"/>
      </div>
    </div>
  </div>
</section>

<section id="team" class="bg-light py-5">
  <div class="container">
    <h2 class="text-center text-uppercase">Our Team</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.shiksha.com/mediadata/images/articles/1655460088phpenyhsT.jpeg" class="card-img-top" alt="Chef 1"/>
          <div class="card-body text-center">
            <h5 class="card-title">Chef John</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.shiksha.com/mediadata/images/articles/1655460088phpenyhsT.jpeg" class="card-img-top" alt="Chef 2"/>
          <div class="card-body text-center">
            <h5 class="card-title">Chef Emily</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img src="https://images.shiksha.com/mediadata/images/articles/1655460088phpenyhsT.jpeg" class="card-img-top" alt="Chef 3"/>
          <div class="card-body text-center">
            <h5 class="card-title">Chef Alex</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="bg-dark text-white text-center py-4">
  <div class="container">
    <p>&copy; 2024 Our Restaurant. All rights reserved.</p>
  </div>
</footer>

      </>
    )
  }
}
