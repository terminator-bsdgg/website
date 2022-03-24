<?php
    $data = [];
    date_default_timezone_set("Europe/Berlin");
    $type = json_decode(file_get_contents('php://input'), true)["type"];
    switch ($type) {
        case "today":
            foreach (range(0, rand(2, 10)) as $lol) {
                $data[] = [
                    "id" => rand(1,10),
                    "start" => date_format(date_create(), "d.m.Y, H:i:s"),
                    "end" => date_format(date_modify(date_create(), "+1 hour"), "d.m.Y, H:i:s"),
                    "description" => "Beim JupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiterJupiter!",
                    "room" => 1337,
                    "organiser" => "Hellmut Dunkelangst"
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
                    "organiser" => "Hellmut Dunkelangst"
                ];
            }
            break;
        case "buildings":
            $buildings = ["A","B","C","D","E","F","G"];
            foreach (range(1, rand(2, 10)) as $lol) {
                $aso = [];
                foreach (range(1, rand(2, 10)) as $lol_) {
                    $aso[] = [
                        "id" => $lol_,
                        "name" => "LOL " . $lol_,
                        "description" => "Geisterzimmer " . $lol_,
                        "status" => rand(0, 2),
                        "statusMessage" => ""
                    ];
                }
                $data[] = [
                    "id" => $lol,
                    "name" => $buildings[array_rand($buildings)],
                    "description" => "Geisterhaus " . $lol,
                    "status" => rand(0, 2),
                    "statusMessage" => "",
                    "rooms" => $aso,
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
    echo json_encode($data);
    return;
?>