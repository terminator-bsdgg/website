<?php
    $data = [];
    $isAdmin = false;
    date_default_timezone_set("Europe/Berlin");
    if (array_key_exists("_token", $_GET) && !is_null($_GET["_token"])) {
        $isAdmin = true;
    }
    switch ($_GET["type"]) {
        case "today":
            foreach (range(1, rand(2, 10)) as $lol) {
                $data[] = [
                    "id" => rand(1,10),
                    "start" => date_format(date_create(), "d.m.Y, H:i:s"),
                    "end" => date_format(date_modify(date_create(), "+1 hour"), "d.m.Y, H:i:s"),
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
            $buildings = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            foreach (range(1, rand(2, 10)) as $lol) {
                $data[] = [
                    "id" => $lol,
                    "name" => $buildings[array_rand($buildings)],
                    "description" => "Geisterhaus " . $lol,
                ];
            }
            break;
        case "rooms":
            $buildings = ["LOL", "WTF", "ROFL"];
            foreach (range(1, rand(2, 10)) as $lol) {
                $data[] = [
                    "id" => $lol,
                    "name" => $buildings[array_rand($buildings)],
                    "description" => "Geisterzimmer" . $lol,
                    "building" => rand(1, 10)
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
                        "name" => $names[array_rand($names)],
                        "group" => $_GET["category"]
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
    echo json_encode(["reservations" => $data, "date" => date_format(date_create(), "d. F Y")]);
    return;
?>