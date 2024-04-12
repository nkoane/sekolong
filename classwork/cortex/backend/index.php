<?php
if (empty($_POST) == false) {
    if ($_POST['password'] == 'joly roger'):
        ?>
        <h1>Welcome!
            <?php echo $_POST['email']; ?>
        </h1>
        <?php
    else:
        ?>
        <h1>Ufunani!</h1>
        <?php
    endif;

    var_dump($_POST);
    die();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0" />
    <title>BCK</title>
    <style>
        main {
            width: 30%;
            margin: 5rem auto 0 auto;
            background-color: #f0f0f0;
            padding: 2rem;
        }

        main form {
            display: flex;
            flex-direction: column;
        }

        main form p {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        main form input {
            width: 80%;
            padding: 0.6rem;
            flex-grow: 0;
        }

        main form button {
            padding: 1rem;
        }
    </style>
</head>

<body>
    <main>
        <form action="index.php"
              method="post">
            <p>
                <label for="email">Your email address</label>
                <input type="email"
                       name="email"
                       id="email"
                       value="lebogang.nkoane@gmail.com" />
            </p>
            <p>
                <label for="password">Your password phrase</label>
                <input type="password"
                       name="password"
                       id="password"
                       value="jungle gym" />
            </p>
            <p style="align-self: flex-end">
                <button type="submit">LOGIN</button>
            </p>
        </form>
    </main>
</body>

</html>