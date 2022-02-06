<?php
    $data = [];
    $isAdmin = false;
    if (array_key_exists("_token", $_GET) && !is_null($_GET["_token"])) {
        $isAdmin = true;
    }
    switch ($_GET["type"]) {
        case "currentReservations":
            foreach (range(1, rand(2, 10)) as $lol) {
                $data[] = [
                    "id" => rand(1,10),
                    "time" => date_format(date_create(), "d.m.Y, H:i:s"),
                    "description" => "Beim Jupiter!",
                    "room" => 1337,
                    "booker" => "Hellmut Dunkelangst"
                ];
            }
            break;
        default:
            $data = null;
            break;
    }
    echo json_encode(["data" => $data, "admin" => $isAdmin]);
    return;
?>