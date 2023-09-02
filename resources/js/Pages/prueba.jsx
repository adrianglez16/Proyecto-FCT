export default function Guest() {
    return (
        <>
            <div class="container mt-5 mb-5">
                <div class="row height d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <div class="card">
                            <div class="p-3">
                                <h6>Comments</h6>
                            </div>

                            <div class="mt-3 d-flex flex-row align-items-center p-3 form-color">
                                <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle me-2"/>
                                <input type="text" class="form-control" placeholder="Enter your comment..."/>
                            </div>

                            <div class="mt-2">
                                <div class="d-flex flex-row p-3">
                                    <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-circle me-3"/>
                                    
                                    <div class="w-100">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex flex-row align-items-center">
                                                <span class="me-2">Brian selter</span>
                                                <small class="c-badge">Top Comment</small>
                                            </div>

                                            <small>12h ago</small>
                                        </div>

                                        <p class="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                                        {/* Feed (Ratings and Replys) */}
                                        {/* <div class="d-flex flex-row user-feed">
                                            <span class="wish"><i class="fa fa-heartbeat me-2"></i>24</span>
                                            <span class="ms-3"><i class="fa fa-comments-o me-2"></i>Reply</span>       
                                        </div>  */}
                                    </div>         
                                </div>          
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </>
  )
}