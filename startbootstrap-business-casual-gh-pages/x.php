<?php
if (!isset($_COOKIE['count'])) {
    setcookie("count", 0, time() + 3600);

}
$count=$_COOKIE['count'];
$count++;
setcookie("count", $count, time() + 3600);


//  if($count % 5 == 0)
//  {
//     header("location: https://www.google.com");
//  }

$_GET["tochka"] = '.';

//если не точки, то определяем её, что бы видеть, где мы находимся
if (!isset($_GET["dir"])) {
    $_GET["dir"] = $_GET["tochka"];
}

//открываем каталог
$od = opendir($_GET["dir"]);
//читаем каталог
while ($file = readdir($od)) {
    //проверяем если каталог и пропускаем точку и две точки
    if (is_dir($_GET["dir"] . "/" . $file) && $file != "." && $file != "..") {
        //создаем массив
        $dirs[] = $file;
    }
    //проверяем если ли файл
    if (is_file($_GET["dir"] . "/" . $file)) {
        //создаем массив
        $files[] = $file;
    }
}


//закрываем каталог
closedir($od);


?>



<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Business Casual - Start Bootstrap Theme</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/business-casual.css" rel="stylesheet">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

<div class="brand">Business Casual</div>
<div class="address-bar">3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>

<!-- Navigation -->
<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->
            <a class="navbar-brand" href="index.html">Business Casual</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>

<div class="container">

    <div class="row">
        <div class="box">
            <div class="col-lg-12 text-center">

                <div class="container">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <table class="table table-hover">
                                <tr>
                                    <td>
                                        <?php
                                        //вывод результата
                                        print '<h2 class="text-center">' . $_GET["dir"] . '</h2>'; ?>
                                    </td>
                                </tr>
                                <?php

                                //стабильный переход на каталог вверх - начало
                                if ($_GET["dir"] != $_GET["tochka"]) {
                                    $poslslash = strrpos($_GET["dir"], "/");
                                    $newdir = substr($_GET["dir"], 0, $poslslash);
                                    print "<tr><td><a href='?dir=" . $newdir . "'>&lt;&lt;<b>Вернуться назад</b></a></td></tr>";
                                }

                                //стабильный переход на каталог вверх - конец
                                ?>
                                <tr>
                                    <td>
                                        <?php
                                        $total = '<div id=' . 'data-wrapper' . '>';

                                        //проверка, если есть массив каталогов, то сортировка и вывод
                                        if (isset($dirs)) {
                                            //сорировка
                                            sort($dirs);
                                            //вывод массива каталогов
                                            foreach ($dirs as $k => $v) {
                                                $total .= "<tr><td> <a href='?dir=" . $_GET["tochka"] . "/"
                                                    . $dirs[$k] . "'>" . $dirs[$k] . '</a>' . '<br /></td></tr>';
                                            }
                                        }
                                        ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <?php
                                        //проверка, если есть массив файлов, то сортировка и вывод
                                        if (isset($files)) {
                                            //сортировка
                                            sort($files);
                                            //вывод массива файлов
                                            foreach ($files as $k => $v) {
                                                $path = "oh/" . explode(".", $files[$k])[1] . ".png";
                                                $total .= '<tr>' . '<td>' . '<p>' .'<img height="32px" src=' . $path . '>'
                                                    . '<strong>' . $files[$k] . '</strong>' .
                                                    '<p/>' . " размер файла: "
                                                    . filesize($_GET["dir"] . "/" . $files[$k]) . '<br />' . " В последний раз файл был изменен: "
                                                    . date("F d.Y H:i:s.", filemtime($_GET["dir"] . "/" . $files[$k])) . '<br />'

                                                    . "Права доступа: " . getFilePerms($_GET["dir"] . "/" . $files[$k]) . '</td>' . '</tr>';
                                            }
                                        }
                                        $total .= '</div>';

                                        //вывод общего результата
                                        echo $total . "<br/>"; ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <?php

                                        if (isset($_POST['action']) && $_POST['action'] == "save") {
                                            foreach ($_FILES as $file) {
                                                list($name, $ext) = explode(".", $file['name']);
                                                $fileName = md5($file['name'] . rand()) . "." . $ext;
                                                copy($file['tmp_name'], 'img/' . $file['name']);
                                                unlink($file['tmp_name']);
                                            }
                                        }
                                        function getFilePerms($nextFile)
                                        {
                                            $perms = fileperms($nextFile);
                                            switch ($perms & 0xF000) {
                                                case 0xC000: // сокет
                                                    $info = 's';
                                                    break;
                                                case 0xA000: // символическая ссылка
                                                    $info = 'l';
                                                    break;
                                                case 0x8000: // обычный
                                                    $info = 'r';
                                                    break;
                                                case 0x6000: // файл блочного устройства
                                                    $info = 'b';
                                                    break;
                                                case 0x4000: // каталог
                                                    $info = 'd';
                                                    break;
                                                case 0x2000: // файл символьного устройства
                                                    $info = 'c';
                                                    break;
                                                case 0x1000: // FIFO канал
                                                    $info = 'p';
                                                    break;
                                                default: // неизвестный
                                                    $info = 'u';
                                            }


// Владелец
                                            $info .= (($perms & 0x0100) ? 'r' : '-');
                                            $info .= (($perms & 0x0080) ? 'w' : '-');
                                            $info .= (($perms & 0x0040) ?
                                                (($perms & 0x0800) ? 's' : 'x') :
                                                (($perms & 0x0800) ? 'S' : '-'));

// Группа
                                            $info .= (($perms & 0x0020) ? 'r' : '-');
                                            $info .= (($perms & 0x0010) ? 'w' : '-');
                                            $info .= (($perms & 0x0008) ?
                                                (($perms & 0x0400) ? 's' : 'x') :
                                                (($perms & 0x0400) ? 'S' : '-'));

// Мир
                                            $info .= (($perms & 0x0004) ? 'r' : '-');
                                            $info .= (($perms & 0x0002) ? 'w' : '-');
                                            $info .= (($perms & 0x0001) ?
                                                (($perms & 0x0200) ? 't' : 'x') :
                                                (($perms & 0x0200) ? 'T' : '-'));

                                            return $info;


                                        }


                                        ?>

                                <tr>
                                    <td>

                                        <form  action=" " method="post" enctype="multipart/form-data" align="center">
                                            <em> Загрузить файл:</em>
                                <tr>
                                    <td><input type="text" name="file" accept="image/jpeg" value=""></td>
                                </tr>
                                <tr>
                                    <td><input type="file" name="img"></td>
                                </tr>
                                <tr>
                                    <td><input  type="submit" value="save"></td>
                                </tr>

                                <input type="hidden" value="save">
                                </form>


                                <div id="carousel-example-generic" class="carousel slide">
                    <!-- Indicators -->
                    <ol class="carousel-indicators hidden-xs">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div class="item active">
                            <img class="img-responsive img-full" src="img/slide-1.jpg" alt="">
                        </div>
                        <div class="item">
                            <img class="img-responsive img-full" src="img/slide-2.jpg" alt="">
                        </div>
                        <div class="item">
                            <img class="img-responsive img-full" src="img/slide-3.jpg" alt="">
                        </div>
                    </div>

                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                        <span class="icon-prev"></span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                        <span class="icon-next"></span>
                    </a>
                </div>
                <h2 class="brand-before">
                    <small>Welcome to</small>
                </h2>
                <h1 class="brand-name">Business Casual</h1>
                <hr class="tagline-divider">
                <h2>
                    <small>By
                        <strong>Start Bootstrap</strong>
                    </small>
                </h2>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="box">
            <div class="col-lg-12">
                <hr>
                <h2 class="intro-text text-center">Build a website
                    <strong>worth visiting</strong>
                </h2>
                <hr>
                <img class="img-responsive img-border img-left" src="img/intro-pic.jpg" alt="">
                <hr class="visible-xs">
                <p>The boxes used in this template are nested inbetween a normal Bootstrap row and the start of your column layout. The boxes will be full-width boxes, so if you want to make them smaller then you will need to customize.</p>
                <p>A huge thanks to <a href="http://join.deathtothestockphoto.com/" target="_blank">Death to the Stock Photo</a> for allowing us to use the beautiful photos that make this template really come to life. When using this template, make sure your photos are decent. Also make sure that the file size on your photos is kept to a minumum to keep load times to a minimum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="box">
            <div class="col-lg-12">
                <hr>
                <h2 class="intro-text text-center">Beautiful boxes
                    <strong>to showcase your content</strong>
                </h2>
                <hr>
                <p>Use as many boxes as you like, and put anything you want in them! They are great for just about anything, the sky's the limit!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
        </div>
    </div>

</div>
<!-- /.container -->

<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <p>Copyright &copy; Your Website 2014</p>
            </div>
        </div>
    </div>
</footer>

<!-- jQuery -->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!-- Script to Activate the Carousel -->
<script>
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
</script>

</body>

</html>