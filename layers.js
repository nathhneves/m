var wms_layers = [];

var format_Planaltina_0 = new ol.format.GeoJSON();
var features_Planaltina_0 = format_Planaltina_0.readFeatures(json_Planaltina_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planaltina_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planaltina_0.addFeatures(features_Planaltina_0);
var lyr_Planaltina_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Planaltina_0, 
                style: style_Planaltina_0,
                popuplayertitle: 'Planaltina',
                interactive: true,
                title: '<img src="styles/legend/Planaltina_0.png" /> Planaltina'
            });
var format_Meiofio_1 = new ol.format.GeoJSON();
var features_Meiofio_1 = format_Meiofio_1.readFeatures(json_Meiofio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meiofio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meiofio_1.addFeatures(features_Meiofio_1);
var lyr_Meiofio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meiofio_1, 
                style: style_Meiofio_1,
                popuplayertitle: 'Meio fio ',
                interactive: true,
                title: '<img src="styles/legend/Meiofio_1.png" /> Meio fio '
            });
var format_Parquedeusomultiplooudistrital_2 = new ol.format.GeoJSON();
var features_Parquedeusomultiplooudistrital_2 = format_Parquedeusomultiplooudistrital_2.readFeatures(json_Parquedeusomultiplooudistrital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parquedeusomultiplooudistrital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parquedeusomultiplooudistrital_2.addFeatures(features_Parquedeusomultiplooudistrital_2);
var lyr_Parquedeusomultiplooudistrital_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parquedeusomultiplooudistrital_2, 
                style: style_Parquedeusomultiplooudistrital_2,
                popuplayertitle: 'Parque de uso multiplo ou distrital',
                interactive: true,
    title: 'Parque de uso multiplo ou distrital<br />\
    <img src="styles/legend/Parquedeusomultiplooudistrital_2_0.png" /> Área Protegida (sem categoria)<br />\
    <img src="styles/legend/Parquedeusomultiplooudistrital_2_1.png" /> Distrital<br />\
    <img src="styles/legend/Parquedeusomultiplooudistrital_2_2.png" /> Ecológico<br />\
    <img src="styles/legend/Parquedeusomultiplooudistrital_2_3.png" /> Refúgio de Vida Silvestre<br />\
    <img src="styles/legend/Parquedeusomultiplooudistrital_2_4.png" /> <br />' });
var format_Unidadedeconservaodeproteoambientaldeplanaltina_3 = new ol.format.GeoJSON();
var features_Unidadedeconservaodeproteoambientaldeplanaltina_3 = format_Unidadedeconservaodeproteoambientaldeplanaltina_3.readFeatures(json_Unidadedeconservaodeproteoambientaldeplanaltina_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidadedeconservaodeproteoambientaldeplanaltina_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidadedeconservaodeproteoambientaldeplanaltina_3.addFeatures(features_Unidadedeconservaodeproteoambientaldeplanaltina_3);
var lyr_Unidadedeconservaodeproteoambientaldeplanaltina_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unidadedeconservaodeproteoambientaldeplanaltina_3, 
                style: style_Unidadedeconservaodeproteoambientaldeplanaltina_3,
                popuplayertitle: 'Unidade de conservação de proteção ambiental de planaltina',
                interactive: true,
                title: '<img src="styles/legend/Unidadedeconservaodeproteoambientaldeplanaltina_3.png" /> Unidade de conservação de proteção ambiental de planaltina'
            });
var format_AriedePlanaltina_4 = new ol.format.GeoJSON();
var features_AriedePlanaltina_4 = format_AriedePlanaltina_4.readFeatures(json_AriedePlanaltina_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AriedePlanaltina_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AriedePlanaltina_4.addFeatures(features_AriedePlanaltina_4);
var lyr_AriedePlanaltina_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AriedePlanaltina_4, 
                style: style_AriedePlanaltina_4,
                popuplayertitle: 'Arie de Planaltina',
                interactive: false,
                title: '<img src="styles/legend/AriedePlanaltina_4.png" /> Arie de Planaltina'
            });
var group_reasdeconservao = new ol.layer.Group({
                                layers: [lyr_Planaltina_0,lyr_Meiofio_1,lyr_Parquedeusomultiplooudistrital_2,lyr_Unidadedeconservaodeproteoambientaldeplanaltina_3,lyr_AriedePlanaltina_4,],
                                fold: 'open',
                                title: 'Áreas de conservação'});
var group_riscos = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'riscos'});

lyr_Planaltina_0.setVisible(true);lyr_Meiofio_1.setVisible(true);lyr_Parquedeusomultiplooudistrital_2.setVisible(true);lyr_Unidadedeconservaodeproteoambientaldeplanaltina_3.setVisible(true);lyr_AriedePlanaltina_4.setVisible(true);
var layersList = [group_reasdeconservao];
lyr_Planaltina_0.set('fieldAliases', {'ra_cira': 'ra_cira', 'ra_codigo': 'ra_codigo', 'ra_nome': 'ra_nome', 'ra_path': 'ra_path', 'ra_areakm2': 'ra_areakm2', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Meiofio_1.set('fieldAliases', {'vi_codigo': 'vi_codigo', 'vi_tipo': 'vi_tipo', 'vi_descric': 'vi_descric', 'vi_fonte': 'vi_fonte', 'vi_pav': 'vi_pav', 'vi_extensa': 'vi_extensa', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'gdb_archiv': 'gdb_archiv', 'gdb_from_d': 'gdb_from_d', 'gdb_to_dat': 'gdb_to_dat', 'st_length_': 'st_length_', });
lyr_Parquedeusomultiplooudistrital_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'gid': 'gid', 'nome': 'nome', 'tipounid': 'tipounid', 'catatual': 'catatual', 'ato_legal': 'ato_legal', 'legiscomp': 'legiscomp', 'planmanejo': 'planmanejo', 'qualidade': 'qualidade', 'nomeprevis': 'nomeprevis', 'catprevist': 'catprevist', 'recat': 'recat', 'sigla': 'sigla', 'ano_criaca': 'ano_criaca', 'administra': 'administra', 'st_area_ge': 'st_area_ge', 'st_perimet': 'st_perimet', });
lyr_Unidadedeconservaodeproteoambientaldeplanaltina_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'objectid': 'objectid', 'nome': 'nome', 'grupo': 'grupo', 'categoria': 'categoria', 'ato_legal': 'ato_legal', 'legislacao': 'legislacao', 'plano_mane': 'plano_mane', 'qualidade_': 'qualidade_', 'area_lei_h': 'area_lei_h', 'legislac_1': 'legislac_1', 'camada_zon': 'camada_zon', 'camada_amo': 'camada_amo', 'resumo': 'resumo', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_AriedePlanaltina_4.set('fieldAliases', {'ra_cira': 'ra_cira', 'ra_codigo': 'ra_codigo', 'ra_nome': 'ra_nome', 'ra_path': 'ra_path', 'ra_areakm2': 'ra_areakm2', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Planaltina_0.set('fieldImages', {'ra_cira': 'Range', 'ra_codigo': 'TextEdit', 'ra_nome': 'TextEdit', 'ra_path': 'TextEdit', 'ra_areakm2': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_Meiofio_1.set('fieldImages', {'vi_codigo': '', 'vi_tipo': '', 'vi_descric': '', 'vi_fonte': '', 'vi_pav': '', 'vi_extensa': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'gdb_archiv': '', 'gdb_from_d': '', 'gdb_to_dat': '', 'st_length_': '', });
lyr_Parquedeusomultiplooudistrital_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'objectid': 'TextEdit', 'gid': 'TextEdit', 'nome': 'TextEdit', 'tipounid': 'TextEdit', 'catatual': 'TextEdit', 'ato_legal': 'TextEdit', 'legiscomp': 'TextEdit', 'planmanejo': 'TextEdit', 'qualidade': 'TextEdit', 'nomeprevis': 'TextEdit', 'catprevist': 'TextEdit', 'recat': 'TextEdit', 'sigla': 'TextEdit', 'ano_criaca': '', 'administra': '', 'st_area_ge': '', 'st_perimet': '', });
lyr_Unidadedeconservaodeproteoambientaldeplanaltina_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': '', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'objectid': 'TextEdit', 'nome': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'ato_legal': 'TextEdit', 'legislacao': 'TextEdit', 'plano_mane': 'TextEdit', 'qualidade_': 'TextEdit', 'area_lei_h': 'TextEdit', 'legislac_1': 'TextEdit', 'camada_zon': 'TextEdit', 'camada_amo': 'TextEdit', 'resumo': 'TextEdit', 'st_area_sh': '', 'st_perimet': '', });
lyr_AriedePlanaltina_4.set('fieldImages', {'ra_cira': '', 'ra_codigo': '', 'ra_nome': '', 'ra_path': '', 'ra_areakm2': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Planaltina_0.set('fieldLabels', {'ra_cira': 'header label - visible with data', 'ra_codigo': 'header label - visible with data', 'ra_nome': 'header label - visible with data', 'ra_path': 'header label - visible with data', 'ra_areakm2': 'header label - visible with data', 'st_area_sh': 'header label - visible with data', 'st_length_': 'header label - visible with data', });
lyr_Meiofio_1.set('fieldLabels', {'vi_codigo': 'header label - visible with data', 'vi_tipo': 'header label - visible with data', 'vi_descric': 'header label - visible with data', 'vi_fonte': 'header label - visible with data', 'vi_pav': 'header label - visible with data', 'vi_extensa': 'header label - visible with data', 'created_us': 'header label - visible with data', 'created_da': 'header label - visible with data', 'last_edite': 'header label - visible with data', 'last_edi_1': 'header label - visible with data', 'gdb_archiv': 'header label - visible with data', 'gdb_from_d': 'header label - visible with data', 'gdb_to_dat': 'header label - visible with data', 'st_length_': 'header label - visible with data', });
lyr_Parquedeusomultiplooudistrital_2.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', 'descriptio': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMo': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'objectid': 'header label - visible with data', 'gid': 'header label - visible with data', 'nome': 'header label - visible with data', 'tipounid': 'header label - visible with data', 'catatual': 'header label - visible with data', 'ato_legal': 'header label - visible with data', 'legiscomp': 'header label - visible with data', 'planmanejo': 'header label - visible with data', 'qualidade': 'header label - visible with data', 'nomeprevis': 'header label - visible with data', 'catprevist': 'header label - visible with data', 'recat': 'header label - visible with data', 'sigla': 'header label - visible with data', 'ano_criaca': 'header label - visible with data', 'administra': 'header label - visible with data', 'st_area_ge': 'header label - visible with data', 'st_perimet': 'header label - visible with data', });
lyr_Unidadedeconservaodeproteoambientaldeplanaltina_3.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', 'descriptio': 'header label - visible with data', 'timestamp': 'header label - visible with data', 'begin': 'header label - visible with data', 'end': 'header label - visible with data', 'altitudeMo': 'header label - visible with data', 'tessellate': 'header label - visible with data', 'extrude': 'header label - visible with data', 'visibility': 'header label - visible with data', 'drawOrder': 'header label - visible with data', 'icon': 'header label - visible with data', 'objectid': 'header label - visible with data', 'nome': 'header label - visible with data', 'grupo': 'header label - visible with data', 'categoria': 'header label - visible with data', 'ato_legal': 'header label - visible with data', 'legislacao': 'header label - visible with data', 'plano_mane': 'header label - visible with data', 'qualidade_': 'header label - visible with data', 'area_lei_h': 'header label - visible with data', 'legislac_1': 'header label - visible with data', 'camada_zon': 'header label - visible with data', 'camada_amo': 'header label - visible with data', 'resumo': 'header label - visible with data', 'st_area_sh': 'header label - visible with data', 'st_perimet': 'header label - visible with data', });
lyr_AriedePlanaltina_4.set('fieldLabels', {'ra_cira': 'header label - visible with data', 'ra_codigo': 'header label - visible with data', 'ra_nome': 'header label - visible with data', 'ra_path': 'header label - visible with data', 'ra_areakm2': 'header label - visible with data', 'st_area_sh': 'header label - visible with data', 'st_length_': 'header label - visible with data', });
lyr_AriedePlanaltina_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});