<?php include('./header.php') ?>
<div class="row w-50 mx-auto mt-5">
    <div class="col">
        <div class="card">
            <div class="card-header">Show Book Data</div>
            <div class="card-body">
                <select name="book" id="book" class="form-select" onchange="showBook(this.value)">
                    <option value="">-- Select a Book --</option>
                    <?php
                    require_once('./lib/db_login.php');

                    // Asign A Query
                    $query = "SELECT * FROM books ORDER BY isbn";
                    $result = $db->query($query);

                    if (!$result) {
                        die("Could not query the database: <br>" . $db->error);
                    }

                    while ($row = $result->fetch_object()) {
                        echo '<option value="'.$row->isbn.'">'.$row->title.'</option>';
                    }

                    $result->free();
                    $db->close();
                    ?>
                </select>
                <br>
                <div id="detail_book"></div>
            </div>
        </div>
    </div>
</div>
<?php include('./footer.php') ?>