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
        case "pastReservations":
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
        case "buildings":
            $buildings = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
            foreach (range(1, rand(2, 10)) as $lol) {
                $data[] = [
                    "id" => $lol,
                    "name" => $buildings[array_rand($buildings)],
                    "description" => "Geisterhaus" . $lol,
                ];
            }
            break;
        case "rooms":
            $buildings = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
            foreach (range(1, rand(2, 10)) as $lol) {
                $data[] = [
                    "id" => $lol,
                    "name" => array_rand($buildings),
                    "description" => "Geisterzimmer" . $lol,
                    "building" => $buildings[array_rand($buildings)]
                ];
            }
            break;
        case "roles":
            $names = ["Ali Fikdusimir", "Peter Goge", "Achmed Ach Lachnet"];
            $groups = [1, 2, 3];
            foreach (range(1, rand(2, 10)) as $lol) {
                if (array_key_exists("category", $_GET) && in_array($_GET["category"], $groups)) {
                    $data[] = [
                        "id" => $lol,
                        "name" => $names[array_rand($names)]
                    ];
                }
                else {
                    $data[] = [
                        "id" => $lol,
                        "name" => $names[array_rand($names)],
                        "group" => $groups[array_rand($groups)]
                    ];
                }
            }
            break;
        default:
            $data = null;
            break;
    }
    echo json_encode(["data" => $data, "admin" => $isAdmin]);
    return;
?>