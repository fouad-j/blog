<template>
  <div class="row">
    <div class="col-sm-8">
      <h3>Let's Get In Touch!</h3>

      <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats
        vitaes nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <form role="form" method="POST" action="#">
        <div class="row">
          <div class="form-group col-lg-12">
            <label for="input1">Name</label>
            <input type="text" name="contact_name" class="form-control" id="input1">
          </div>
          <div class="form-group col-lg-12">
            <label for="input2">Email Address</label>
            <input type="email" name="contact_email" class="form-control" id="input2">
          </div>
          <div class="form-group col-lg-12">
            <label for="input3">Phone Number</label>
            <input type="phone" name="contact_phone" class="form-control" id="input3">
          </div>
          <div class="clearfix"></div>
          <div class="form-group col-lg-12">
            <label for="input4">Message</label>
            <textarea name="contact_message" class="form-control" rows="6" id="input4"></textarea>
          </div>
          <div class="form-group col-lg-12">
            <input type="hidden" name="save" value="contact">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>

    <div class="col-sm-4">
      <h3>Modern Business</h3>
      <h4>A Start Bootstrap Template</h4>
      <p>
        5555 44th Street N.<br>
        Bootstrapville, CA 32323<br>
      </p>
      <p><abbr title="Phone"><span class="fa fa-phone"></span></abbr>: (555) 984-3600</p>
      <p><abbr title="Email"><i class="fa fa-envelope-o"></i></abbr>: <a href="#">fouad.j[at]live.fr</a></p>
      <p><abbr title="Hours"><i class="fa fa-clock-o"></i></abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>
      <ul class="list-unstyled list-inline list-social-icons">
        <li class="tooltip-social facebook-link">
          <a href="#facebook-page" data-toggle="tooltip" data-placement="top" title="Facebook">
            <i class="fa fa-facebook-square fa-2x"></i>
          </a>
        </li>
        <li class="tooltip-social linkedin-link">
          <a href="#linkedin-company-page" data-toggle="tooltip" data-placement="top" title="LinkedIn">
            <i class="fa fa-linkedin-square fa-2x"></i>
          </a>
        </li>
        <li class="tooltip-social twitter-link">
          <a href="#twitter-profile" data-toggle="tooltip" data-placement="top" title="Twitter">
            <i class="fa fa-twitter-square fa-2x"></i>
          </a>
        </li>
        <li class="tooltip-social google-plus-link">
          <a href="#google-plus-page" data-toggle="tooltip" data-placement="top" title="Google+">
            <i class="fa fa-google-plus-square fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>
