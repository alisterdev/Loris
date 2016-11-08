<?php

/**
 * This script copies records from videos module to media module
 *
 * PHP Version 5
 *
 * @category Main
 * @package  Loris
 * @author   Alex I. <ailea.mcin@gmail.com>
 * @license  Loris license
 * @link     https://www.github.com/aces/Loris-Trunk/
 */

error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

require_once "generic_includes.php";

$videos = $DB->pselect("SELECT * FROM videos", []);
$videosCount = count($videos);
echo "Copying $videosCount records from Videos to Media...\n\n";

foreach ($videos as $key => $video) {

    $sessionID = $DB->pselectOne(
        "SELECT s.ID as session_id FROM candidate c " .
        "LEFT JOIN session s USING(CandID) WHERE c.PSCID = :v_pscid AND " .
        "s.Visit_label = :v_visit_label AND s.CenterID = :v_center_id",
        [
            'v_pscid'       => $video["PSCID"],
            'v_visit_label' => $video["visitLabel"],
            'v_center_id'   => $video["For_site"],
        ]
    );

    $mediaRecord = [
        'id'            => $video['record_id'],
        'session_id'    => $sessionID,
        'instrument'    => $video["Instrument"],
        'date_taken'    => $video["Date_taken"],
        'comments'      => $video["comments"],
        'file_name'     => $video["File_name"],
        'file_type'     => $video["File_type"],
        'data_dir'      => $video["Data_dir"],
        'uploaded_by'   => $video["uploaded_by"],
        'hide_file'     => $video["hide_video"],
        'date_uploaded' => $video["Date_uploaded"],
    ];

    try {
        $DB->insert('media', $mediaRecord);
    } catch(\DatabaseException $e) {
        echo $e;
        die("\n\n\033[31mMake sure Media table is created and is empty!\033\n\n");
    }

    if ($key % 100 === 0) {
        $remaining = ($videosCount - $key);
        echo "$remaining files remaining...\n";
    }
}

echo "\nDone!\n";