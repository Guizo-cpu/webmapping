var wms_layers = [];

var format_SaintJerme_0 = new ol.format.GeoJSON();
var features_SaintJerme_0 = format_SaintJerme_0.readFeatures(json_SaintJerme_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaintJerme_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaintJerme_0.addFeatures(features_SaintJerme_0);
var lyr_SaintJerme_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SaintJerme_0, 
                style: style_SaintJerme_0,
                interactive: true,
                title: '<img src="styles/legend/SaintJerme_0.png" /> Saint-Jerôme'
            });
var format_ADRS2017_1 = new ol.format.GeoJSON();
var features_ADRS2017_1 = format_ADRS2017_1.readFeatures(json_ADRS2017_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADRS2017_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADRS2017_1.addFeatures(features_ADRS2017_1);
var lyr_ADRS2017_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADRS2017_1, 
                style: style_ADRS2017_1,
                interactive: true,
                title: '<img src="styles/legend/ADRS2017_1.png" /> ADRS-2017'
            });
var format_RouteSaintJ_2 = new ol.format.GeoJSON();
var features_RouteSaintJ_2 = format_RouteSaintJ_2.readFeatures(json_RouteSaintJ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteSaintJ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteSaintJ_2.addFeatures(features_RouteSaintJ_2);
var lyr_RouteSaintJ_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteSaintJ_2, 
                style: style_RouteSaintJ_2,
                interactive: true,
                title: '<img src="styles/legend/RouteSaintJ_2.png" /> RouteSaintJ'
            });
var format_PlanEau_3 = new ol.format.GeoJSON();
var features_PlanEau_3 = format_PlanEau_3.readFeatures(json_PlanEau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanEau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanEau_3.addFeatures(features_PlanEau_3);
var lyr_PlanEau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlanEau_3, 
                style: style_PlanEau_3,
                interactive: true,
                title: '<img src="styles/legend/PlanEau_3.png" /> PlanEau'
            });
var group_LBL = new ol.layer.Group({
                                layers: [lyr_SaintJerme_0,lyr_ADRS2017_1,lyr_RouteSaintJ_2,lyr_PlanEau_3,],
                                title: "LBL"});

lyr_SaintJerme_0.setVisible(true);lyr_ADRS2017_1.setVisible(true);lyr_RouteSaintJ_2.setVisible(true);lyr_PlanEau_3.setVisible(true);
var layersList = [group_LBL];
lyr_SaintJerme_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MUNIC_S_': 'MUNIC_S_', 'MUNIC_S_ID': 'MUNIC_S_ID', 'MUS_VA_SUP': 'MUS_VA_SUP', 'MUS_NO_IND': 'MUS_NO_IND', 'MUS_DE_IND': 'MUS_DE_IND', 'MUS_CO_GEO': 'MUS_CO_GEO', 'MUS_CO_DES': 'MUS_CO_DES', 'MUS_NM_MUN': 'MUS_NM_MUN', 'MUS_CO_MRC': 'MUS_CO_MRC', 'MUS_NM_MRC': 'MUS_NM_MRC', 'MUS_CO_REG': 'MUS_CO_REG', 'MUS_NM_REG': 'MUS_NM_REG', 'MUS_NM_AGG': 'MUS_NM_AGG', 'MUS_NM_COM': 'MUS_NM_COM', 'MUS_DA_CON': 'MUS_DA_CON', 'MUS_CO_MOD': 'MUS_CO_MOD', 'MUS_DA_MOD': 'MUS_DA_MOD', 'MUS_CO_REF': 'MUS_CO_REF', 'MUS_CO_VER': 'MUS_CO_VER', });
lyr_ADRS2017_1.set('fieldAliases', {'Version': 'Version', 'NoCivq': 'NoCivq', 'NoCivqSuf': 'NoCivqSuf', 'OdoRecNorm': 'OdoRecNorm', 'MunNom': 'MunNom', 'CodeMun': 'CodeMun', 'CodPos': 'CodPos', 'Categorie': 'Categorie', 'NoLot': 'NoLot', 'NbUnite': 'NbUnite', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_RouteSaintJ_2.set('fieldAliases', {'IdRte': 'IdRte', 'Version': 'Version', 'NomRte': 'NomRte', 'NoRte': 'NoRte', 'ClsRte': 'ClsRte', 'CaractRte': 'CaractRte', 'Gestion': 'Gestion', 'Producteur': 'Producteur', 'IdProduct': 'IdProduct', });
lyr_PlanEau_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_SaintJerme_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MUNIC_S_': 'TextEdit', 'MUNIC_S_ID': 'TextEdit', 'MUS_VA_SUP': 'TextEdit', 'MUS_NO_IND': 'TextEdit', 'MUS_DE_IND': 'TextEdit', 'MUS_CO_GEO': 'TextEdit', 'MUS_CO_DES': 'TextEdit', 'MUS_NM_MUN': 'TextEdit', 'MUS_CO_MRC': 'TextEdit', 'MUS_NM_MRC': 'TextEdit', 'MUS_CO_REG': 'TextEdit', 'MUS_NM_REG': 'TextEdit', 'MUS_NM_AGG': 'TextEdit', 'MUS_NM_COM': 'TextEdit', 'MUS_DA_CON': 'DateTime', 'MUS_CO_MOD': 'TextEdit', 'MUS_DA_MOD': 'DateTime', 'MUS_CO_REF': 'TextEdit', 'MUS_CO_VER': 'TextEdit', });
lyr_ADRS2017_1.set('fieldImages', {'Version': '', 'NoCivq': '', 'NoCivqSuf': '', 'OdoRecNorm': '', 'MunNom': '', 'CodeMun': '', 'CodPos': '', 'Categorie': '', 'NoLot': '', 'NbUnite': '', 'Longitude': '', 'Latitude': '', });
lyr_RouteSaintJ_2.set('fieldImages', {'IdRte': '', 'Version': '', 'NomRte': '', 'NoRte': '', 'ClsRte': '', 'CaractRte': '', 'Gestion': '', 'Producteur': '', 'IdProduct': '', });
lyr_PlanEau_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_SaintJerme_0.set('fieldLabels', {});
lyr_ADRS2017_1.set('fieldLabels', {});
lyr_RouteSaintJ_2.set('fieldLabels', {});
lyr_PlanEau_3.set('fieldLabels', {});
lyr_PlanEau_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});