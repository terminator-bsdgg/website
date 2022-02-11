<?php
    echo json_encode([
        ["start" => "2022-02-10", "title" => "lol", "id" => 1],
        ["start" => "2022-02-15T10:00:00", "end" => "2022-02-15T11:00:00", "title" => "lol", "id" => 2, "extendedProps" => ["booker" => "Hellmut Dunkelangst"]],
        ["start" => "2022-02-16T10:00:00", "end" => "2022-02-16T11:00:00", "title" => "lol", "id" => 3, "extendedProps" => ["booker" => "Hellmut Dunkelangst"]],
        ["start" => "2022-02-08T10:10:00", "end" => "2022-02-08T11:11:00", "titl" => "looooooooooooooooool", "id" => 4, "extendedProps" => ["booker" => "Hellmut Dunkelangst"]]
    ]);
    return;
?>