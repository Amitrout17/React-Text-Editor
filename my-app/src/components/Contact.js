export default function Contact(props){
return(
    <>
<section class="mb-4">

    <h2 class={`h1-responsive font-weight-bold text-center my-4 text-${props.mode==='dark'?'light':'dark'}`}>Contact us</h2>
    <p class={`text-center w-responsive mx-auto mb-5 text-${props.mode==='dark'?'light':'dark'}`}>Contact me at
        </p>

    <div class="row mx-5">

        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" />
                            <label for="name" class={`text-${props.mode==='dark'?'light':'dark'}`}>Your Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" />
                            <label for="email" class={`text-${props.mode==='dark'?'light':'dark'}`}>Your Email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" />
                            <label for="subject" class={`text-${props.mode==='dark'?'light':'dark'}`}>Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message" class={`text-${props.mode==='dark'?'light':'dark'}`}>Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();" href="/">Send</a>
            </div>
            <div class="status"></div>
        </div>

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p class={`text-${props.mode==='dark'?'light':'dark'}`}>HIG 22. Bhubneswar, Odisha</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p class={`text-${props.mode==='dark'?'light':'dark'}`}>+91 77x557xxxx</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p class={`text-${props.mode==='dark'?'light':'dark'}`}>amitroutard@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
    </>
)
} 