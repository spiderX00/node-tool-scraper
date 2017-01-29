module.exports.HEADTEMPLATE = `
  <html>

  <head>

      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" />
      <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css" />
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/app.css" />
      <link rel="stylesheet" href="assets/css/style.min.css" />
      <link rel="stylesheet" href="assets/css/custom.css" />
      <!-- babel-polyfill -->
      <script src="node_modules/babel-polyfill/dist/polyfill.min.js"></script>
      <!-- main dependencies -->
      <script src="node_modules/lodash/lodash.js"></script>
      <script src="node_modules/angular/angular.js"></script>
      <script src="node_modules/angular-animate/angular-animate.js"></script>
      <!-- shared controller -->
      <script src="main.controller.js"></script>
      <!-- settings -->
      <script src="settings.js"></script>
      <!-- entry point -->
      <script src="index.js"></script>

  </head>

  <body class="animated fixed" ng-controller="MainController as $ctrl">
      <div id="navbar">
          <div>
              <div class="navbar navbar-default" role="banner">
                  <div class="container-fluid rowTopHeader">
                      <div class="row">
                          <div class="col-md-12 topHeaderLine"></div>
                      </div>
                      <div class="col-md-2 col-xs-4">
                          <div class="navbar-header area-logo">
                              <a href="#/">
                                  <img src="assets/css/logo.png">
                              </a>
                          </div>
                          <!-- logo -->
                      </div>
                      <div class="col-md-6 hidden-sm hidden-xs">
                          <!-- topmenu -->
                          <div class="rowBottomHeader2" ng-show="$ctrl.model.showTopHeader">
                              <ul class="list-inline">
                                  <li ng-repeat="item in topMenu" ng-class="{active: item.$isActive === true}">
                                      <a>
                                          <div class="iconContainerHeader text-center">
                                              <i class="fa fa-globe"></i>
                                          </div>
                                          <span>{{item}}</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-md-4 col-xs-8">
                          <div class="navbar-header pull-right" ng-hide="$ctrl.model.showModalLogin">
                              <ul class="list-inline">
                                  <li><i class="fa fa-user megaIcon" style="color:#808080"></i>
                                  </li>
                                  <li>
                                      <span class="logo-text" style="display:block; padding-right:9px; padding-left:9px"><strong style="color:orangered">Username:</strong> <span class="headerbar--text"> GiancarloRossi </span> </span>
                                      <span class="logo-text" style="padding-right:9px; padding-left:9px"><strong style="color:orangered">Nome:</strong> <span class="headerbar--text"> Giancarlo Rossi </span> </span>
                                  </li>
                                  <li>
                                      <strong style="color:orangered">tempo attivit&#xE0;:</strong>
                                      <timer interval="1000"> <span class="headerbar--text"> 99:99:99 </span> </timer>
                                  </li>
                                  <li>
                                      <a><span style="color:orangered" class="fa fa-sign-out megaIcon"></span></a>
                                  </li>
                              </ul>
                          </div>
                          <div class="navbar-header pull-right" ng-show="$ctrl.model.showModalLogin">
                              <div id="signInArea">
                                  <input type="text" class="form-control" placeholder="Username" ng-model-ignored="$ctrl.model.login.username">
                                  <input type="password" class="form-control" placeholder="Password" ng-model-ignored="$ctrl.model.login.password">
                                  <button ng-click="loginF()"><i class="icon-angle-circled-right"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <nav class="nav navbar navbar-inverse navbar-static-top marginBottom-0 rowBottomHeader navbar-static-top navbar-sub" role="navigation">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                  </div>
                  <div class="collapse navbar-collapse" id="navbar-collapse-1">
                      <ul class="nav navbar-nav">
                          <li ng-repeat="item in $ctrl.headerbar.menu" ng-class="{active: item.$isActive === true}">
                              <a type="button" type="button" ng-click="$ctrl.sidebar.page = $index">
                                  <span class="iconContainerHeader">
                                        <i class="fa" ng-class="item.icon"></i>
                                    </span>
                                  <span class="hidden-sm">{{item.titoloIt}}</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>
      <div id="contentDiv" class="container">
          <div class="row-offcanvas row-offcanvas-left">
              <!--left-->
              <div id="sidebar" class="sidebar-offcanvas hidden-sm hidden-xs sidebarDiv">
                  <div style="padding: 0px">
                      <ul class="list-group admin-nav-main">
                          <li ng-repeat="item in $ctrl.sidebar.menu" ng-class="{activeside: item.$isActive === true}" class="nga-default nga-stagger nga-slide-up">
                              <a href="javascript:void(0);">
                                  <i class="fa">
                                       <div class="icon-bg bg-orange"></div>
                                   </i>
                                  <span class="menu-title"><!--<i class="fa {{item.ico}}"></i>-->{{item.titoloIt}}</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>`;
