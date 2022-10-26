<div id="root">
    <div class="container pt-5">
        <div class="row align-items-stretch">

            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Customers<svg
                            class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                            role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10
                        <?php 
                    //    echo $conn->query("SELECT `status` FROM `tickets` WHERE `status`=0")->num_rows; 
                      ?>

                    </span>

                    <!-- <span
                    class="hind-font caption-12 c-dashboardInfo__subInfo">Total month: 30</span> -->
                </div>
            </div>

            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Staff<svg
                            class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                            role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10 <?php 
                    //    echo $conn->query("SELECT `status` FROM `tickets` WHERE `status`=0")->num_rows; 
                      ?>

                    </span>

                    <!-- <span
                    class="hind-font caption-12 c-dashboardInfo__subInfo">Total month: 30</span> -->
                </div>
            </div>

            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total
                        Departments<svg class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24"
                            aria-hidden="true" role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10 <?php 
                    //    echo $conn->query("SELECT `status` FROM `tickets` WHERE `status`=0")->num_rows; 
                      ?>

                    </span>

                    <!-- <span
                    class="hind-font caption-12 c-dashboardInfo__subInfo">Total month: 30</span> -->
                </div>
            </div>
            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Tickets<svg
                            class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                            role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10 <?php 
                    //    echo $conn->query("SELECT `status` FROM `tickets` WHERE `status`=0")->num_rows; 
                      ?>

                    </span>

                    <!-- <span
                    class="hind-font caption-12 c-dashboardInfo__subInfo">Total month: 30</span> -->
                </div>
            </div>

            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Ticket
                        Solved<svg class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                            role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10 <?php 
                    
                    // echo $conn->query("SELECT SUM(status), status FROM tickets GROUP BY status DESC")->num_rows; 
                    // echo $conn->query("select status from tickets group by status having count(*) =1")->num_rows; 
                    // echo $conn->query("SELECT `status` FROM `tickets` WHERE `status`=2")->num_rows; 
                    
                    ?>
                    </span>
                </div>
            </div>
            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Pending<svg
                            class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                            role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10 <?php 
                    //    echo $conn->query("SELECT `status` FROM `tickets` WHERE `status`=0")->num_rows; 
                      ?>

                    </span>

                    <!-- <span
                    class="hind-font caption-12 c-dashboardInfo__subInfo">Total month: 30</span> -->
                </div>
            </div>
            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Ongoing<svg
                            class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                            role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10 <?php 
                    //    echo $conn->query("SELECT `status` FROM `tickets` WHERE `status`=1")->num_rows; 
                      ?>
                    </span>
                </div>
            </div>

            <div class="c-dashboardInfo col-lg-3 col-md-6">
                <div class="wrap">
                    <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Supplier<svg
                            class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                            role="presentation">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                            </path>
                        </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10 <?php 
                    //    echo $conn->query("SELECT `id` FROM `supplier`")->num_rows; 
                      ?>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>