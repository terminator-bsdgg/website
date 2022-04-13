<?php
    date_default_timezone_set("Europe/Berlin");
    $input = json_decode(file_get_contents("php://input"), true);
    $start = strtotime(substr(date($input["start"]), 0 -6));
    $end = strtotime(substr(date($input["end"]), 0, -6));
    $duration = floor(($end - $start) /86400);
    $date = date_create();
    date_timestamp_set($date, $start);
    $data = [];
    for ($i = 1; $i <= $duration; $i++) {
        $data[] = [
            "id" => $i,
            "start" => date_format($date, "Y-m-d\TH:i:s"),
            "end" => date_format($date, "Y-m-d\TH:i:s"),
            "title" => "LOL " . $i,
            "classNames" => ["cursor-pointer"],
            "extendedProps" => [
                "organiser"=> "Hellmut Dunkelangst",
                "start" => $start *1000,
                "end" => $end *1000
            ]
        ];
        date_modify($date, "+1 day");
        //date_modify($endDate, "+1 day");
    }
    echo json_encode($data);
    return;
?>