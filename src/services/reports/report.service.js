
module.exports = function (app) {
    app.use('/api/report', {
        async create(data, params) {
            // Extract user's IP address from the request
            // Log the IP address into MongoDB
            // Return a success response
            
            const ip = params.connection.remoteAddress;

            const ReportModel = app.service('mongodb').Model;

            // Now you create a new report with the IP address and the current date
            const reportEntry = await ReportModel.create({ ip, date: new Date(), ...data });
            
            // And finally, you return a success response to the client
            return { message: 'Report received', reportEntry };
        },
    });
};

