import React from 'react';
import './Home.css';

const Home=()=> {
    return (
       <div id ="wrapper">
         <div class="about-body">
    <div class="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-img">
                        <img src="https://www.fbtadventures.com/img/chef-2.jpg" alt="Image"/>
                        <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-content">
                        <div class="section-header">
                            <p>About Us</p>
                            <h2>Cooking Since 2010</h2>
                        </div>
                        <div class="about-text">
                            <p>
                                Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. 
                            </p>
                            <p>
                                On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
                            </p>
                            <a class="btn custom-btn" href="">Book A Table</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="team">
        <div class="container">
            <div class="section-header text-center">
                <p>Our Team</p>
                <h2>Our Master Chef</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="https://media.istockphoto.com/photos/smiling-male-cook-on-gray-background-picture-id1300835557?b=1&k=20&m=1300835557&s=170667a&w=0&h=I4zIwBHR2MppJiL2w-uLl9AUEwQ2Llq3tXuOY6ha28g=" alt="Image"/>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-text">
                            <h2>Adam Phillips</h2>
                            <p>Head chef</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="https://www.earnmydegree.com/sites/all/files/public/images/become-chef.jpg" alt="Image"/>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-text">
                            <h2>Dylan Adams</h2>
                            <p>Executive chef</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="https://media.istockphoto.com/photos/portrait-of-positive-toothy-chef-cook-in-beret-white-outfit-with-picture-id970522164?k=20&m=970522164&s=612x612&w=0&h=BtL3rjrTfa0r3rb3IY9pufOu9hcw25s0HNXlMW6DYWo=" alt="Image"/>
                            <div class="team-social">  
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-text">
                            <h2>Jhon Doe</h2>
                            <p>Master Chef</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-item">
                        <div class="team-img">
                            <img src="https://privatejobvacancy.com/wp-content/uploads/2021/07/Chef-Job.jpg" alt="Image"/>
                            <div class="team-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="team-text">
                            <h2>Josh Dunn</h2>
                            <p>Sous Chef</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <div class="testimonial-body">
        <div class="container">
            <div class="section-header text-center">
                <p>User Ratings</p>
                <h2>Hear What Our Customers Say</h2>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="https://i.imgur.com/Uz4FjGZ.jpg"/> </div>
                        <div class="card-text">
                            <div class="card-title">Foodie never fails to impress me!</div> <i>"Foodie Bro is one great website to order food and track your order. Hope it continues to offer such great service. I had ordered biryani and few other items from this app a few days ago and all of them were delivered within 30 minutes. During this covid food delivery apps like Foodie Bro are a great boon to all of us."</i>
                        </div>
                        <div class="testimonial-footer"> <span id="name">Angellia Miller<br/></span></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card d-flex mx-auto">
                        <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="https://i.imgur.com/3TlwnLF.jpg"/> </div>
                        <div class="card-text">
                            <div class="card-title">Foodie Bro dominates the delivery services!</div> <i>"My companions and I were starving and needed high-quality meals as soon as possible. As a result, I relied on Foodie Bro to fulfil our needs. We were really pleased with the service; not only was the meal of exceptional quality, but the delivery speed was also exceptional."</i>
                        </div>
                        <div class="testimonial-footer"> <span id="name">Micheal Smith<br/></span></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card d-flex mx-auto ">
                        <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="https://i.imgur.com/udGH5tO.jpg"/> </div>
                        <div class="card-text">
                            <div class="card-title">Simple yet perfect initiative!</div> <i>It was the first time I was ordering food online and someone told me about Foodie Bro. Honestly speaking, I was stern towards other food delivery apps but after their service, it makes me feel that Foodie Bro is good enough. The food that I ordered was tasty enough and was delivered just in time.</i>
                        </div>
                        <div class="testimonial-footer"> <span id="name">Christina Williams<br/></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <footer class="footer">
       <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">bag</a></li>
                    <li><a href="#">shoes</a></li>
                    <li><a href="#">dress</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
       </div>
    )
}

export default Home;
