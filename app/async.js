exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        var defObj = $.Deferred();
        setTimeout(function () {
            defObj.resolve(value);
        }, 10);
        return defObj.promise();
    },

    manipulateRemoteData: function (url) {
        var defObj = $.Deferred();

        $.ajax(url).then(function (data) {
            var people = $.map(data.people, function (person) {
                return person.name;
            });
            defObj.resolve(people.sort());
        });

        return defObj.promise();
    }
};