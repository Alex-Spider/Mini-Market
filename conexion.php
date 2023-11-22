<?php
class Cconexion {
    public static function conectar() {
        $host = 'localhost';
        $dbname = 'tienda';
        $username = 'root';
        $pass = '';

        try {
            $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $pass);
            echo("Se conectó exitosamente a la base de datos");
        } catch (PDOException $exp) {
            echo("No fue posible conectarse a la base de datos: $dbname, error: $exp ");
        }
        return $conn;
    }
}
?>
