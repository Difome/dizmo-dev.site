(function () {

    window.onload = main;

    var Arr = ['Lorem, ipsum', 'dolor sit', 'amet consectetur', 'adipisicing elit.', 'Animi dolorum in vitae,', 'eligendi aut sequi obcaecati', 'itaque illum eos ab totam', 'accusantium natus molestias', 'deleniti minus enim', 'accusamus nihil quis.']

    function main() {
        var container = document.getElementById('container')

        for (var i = 0; i < Arr.length; i++) {
            container.append(Arr[i] + ' ')
        }
    }

})()