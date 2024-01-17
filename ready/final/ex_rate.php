<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>기말고사 2번</title>
    <style>
        table{
            width: 600px;
            text-align: center;
            border-collapse: collapse;
        }
    </style>
</head>

<body>
    <?php
    $name = $_POST["txt_money"];
    echo .$name;
    $before = $_POST["before"];
    echo .$before;
    $after = $_POST["after"];
    echo .$after;
    $sql = "select * from usedcar where currency ${before} and ex_rate ${after}";

    function add_row($i, $array){
        echo "<tr><td>$i</td>";
        echo "<td>{$array["currency"]}</td>";
        echo "<td>{$array["ex_rate"]}</td>";
    }

    $con = mysqli_connect("localhost", "root", "", "sample");
    $result = mysqli_query($con, $sql);
    $count = mysqli_num_rows($result);

    echo "<table>";
    for ($i = 0; $i < $count; $i++) {
        mysqli_data_seek($result, $i);
        $row = mysqli_fetch_array($result);
        add_row($i + 1, $row);
    }
    echo "</table>";

    mysqli_free_result($result);
    mysqli_close($con);
    ?>
</body>

</html>