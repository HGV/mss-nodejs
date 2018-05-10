var cxml = require("cxml");
var Primitive = require('./xml-primitives');

cxml.register('Mss', exports, [
	[Primitive, ['Date', 'number', 'string'], []]
], [
	'Address',
	'Bank',
	'Channel',
	'CheckInOut',
	'Contact',
	'Day',
	'Days',
	'Error',
	'Feature',
	'FeaturesView',
	'Geolocation',
	'Header',
	'Hotel',
	'HotelPayment',
	'Hotels',
	'Location',
	'LocationName',
	'LtsData',
	'Matching',
	'Occupancy',
	'Offer',
	'OfferDescription',
	'OnlinePayment',
	'Paging',
	'Picture',
	'Pictures',
	'Pos',
	'Price',
	'PriceList',
	'Prices',
	'Properties',
	'Rating',
	'Ratings',
	'Restriction',
	'Restrictions',
	'Result',
	'Room',
	'RoomDescription',
	'RoomDetail',
	'RoomDetails',
	'RoomNumbers',
	'RoomPrice',
	'RoomPrices',
	'Root',
	'Season',
	'Seasons',
	'Services',
	'Special',
	'Theme',
	'Themes'
], [
	[0, 0, [[151, 0]], []],
	[0, 0, [[23, 0], [29, 0], [163, 0], [181, 0], [187, 0], [188, 0]], []],
	[0, 0, [[64, 0], [95, 0], [165, 0]], []],
	[0, 0, [[191, 0], [16, 0], [61, 0], [217, 0], [241, 0], [245, 0], [250, 0]], []],
	[0, 0, [[60, 0], [176, 0]], []],
	[0, 0, [[55, 0], [56, 0], [118, 0], [186, 0]], []],
	[0, 0, [[31, 0], [59, 0], [238, 0]], []],
	[0, 0, [[196, 2]], []],
	[0, 0, [[25, 0], [87, 0]], []],
	[0, 0, [[68, 0], [174, 0]], []],
	[0, 0, [[199, 2]], []],
	[0, 0, [[8, 0], [54, 0], [80, 0], [82, 0]], []],
	[0, 0, [[198, 0], [219, 0], [139, 0], [155, 0], [167, 0]], []],
	[0, 0, [[189, 0], [14, 0], [192, 0], [193, 0], [194, 0], [195, 0], [51, 0], [58, 0], [200, 0], [202, 0], [203, 0], [62, 0], [207, 0], [65, 0], [76, 0], [79, 0], [210, 0], [211, 0], [212, 0], [213, 0], [214, 0], [94, 0], [218, 0], [117, 0], [223, 0], [226, 0], [124, 0], [126, 0], [236, 0], [159, 0], [178, 0]], []],
	[0, 0, [[88, 0]], []],
	[0, 0, [[205, 2]], []],
	[0, 0, [[69, 0], [71, 0], [72, 0], [78, 0]], []],
	[0, 0, [[96, 0], [97, 0], [98, 0], [99, 0]], []],
	[0, 0, [[1, 0], [2, 0], [3, 0]], []],
	[0, 0, [[70, 0], [73, 0], [74, 0], [75, 0]], []],
	[0, 0, [[85, 0], [91, 0], [161, 0]], []],
	[0, 0, [[103, 0], [105, 0], [106, 0], [110, 0], [111, 0], [112, 0], [114, 0], [222, 0], [254, 0], [170, 0]], []],
	[0, 0, [[216, 2]], []],
	[0, 0, [[190, 0], [15, 0], [89, 0], [119, 0]], []],
	[0, 0, [[27, 0], [177, 0]], []],
	[0, 0, [[26, 0], [166, 0], [175, 0], [180, 0]], []],
	[0, 0, [[220, 2]], []],
	[0, 0, [[77, 2]], []],
	[0, 0, [[49, 0], [224, 0], [120, 0], [121, 0], [122, 0], [123, 0], [125, 0], [128, 0], [129, 0], [130, 0], [131, 0], [132, 0], [133, 0], [134, 0], [135, 0], [164, 0], [169, 0], [179, 0]], []],
	[0, 0, [[4, 0], [6, 0], [19, 0], [21, 0], [34, 0], [36, 0], [40, 0], [42, 0], [44, 0], [46, 0], [104, 0], [108, 0], [113, 0], [136, 0], [137, 0], [248, 0], [158, 0], [168, 0]], []],
	[0, 0, [[227, 2]], []],
	[0, 0, [[9, 0], [12, 0], [13, 0], [53, 0], [81, 0], [84, 0], [92, 0], [162, 0]], []],
	[0, 0, [[28, 0], [30, 0], [67, 0], [138, 0], [185, 0]], []],
	[0, 0, [[235, 2]], []],
	[0, 0, [[10, 0], [17, 0], [22, 0], [24, 0], [38, 0], [39, 0], [48, 0], [63, 0], [83, 0], [86, 0], [90, 0], [93, 0], [102, 0], [116, 0], [153, 0]], []],
	[0, 0, [[237, 2]], []],
	[0, 0, [[206, 2], [252, 2]], []],
	[0, 0, [[197, 0], [52, 0], [57, 0], [201, 0], [215, 0], [225, 0], [127, 0], [233, 2], [234, 0], [140, 0], [141, 0], [243, 0], [142, 0], [143, 0], [145, 0], [244, 2], [146, 0], [246, 2], [148, 0], [149, 0], [150, 0], [152, 0], [172, 0]], []],
	[0, 0, [[240, 2]], []],
	[0, 0, [[11, 0], [101, 0]], []],
	[0, 0, [[242, 2]], []],
	[0, 0, [[100, 0]], []],
	[0, 0, [[109, 0], [230, 0], [231, 0], [232, 0], [144, 0], [147, 0]], []],
	[0, 0, [[229, 2]], []],
	[0, 0, [[204, 0], [239, 0]], []],
	[0, 0, [[32, 0], [33, 0], [228, 0]], []],
	[0, 0, [[247, 2]], []],
	[0, 0, [[154, 2]], []],
	[0, 0, [[5, 0], [7, 0], [18, 0], [20, 0], [35, 0], [37, 0], [41, 0], [43, 0], [45, 0], [47, 0], [50, 0], [208, 0], [209, 0], [107, 0], [115, 0], [221, 0], [249, 0], [251, 0], [156, 0], [157, 0], [160, 0], [255, 0], [173, 0], [182, 0], [183, 0], [184, 0]], []],
	[0, 0, [[66, 0], [171, 0]], []],
	[0, 0, [[253, 2]], []]
], [
	['A0Ene', [2], 0],
	['A0MTV', [2], 0],
	['A0Rep', [2], 0],
	['adults_max', [2], 0],
	['adults_max', [2], 0],
	['adults_min', [2], 0],
	['adults_min', [2], 0],
	['altitude', [2], 0],
	['area', [2], 0],
	['arrival', [2], 0],
	['availability', [3], 0],
	['bath_rooms', [2], 0],
	['bed_rooms', [2], 0],
	['bookable', [2], 0],
	['ccards', [2], 0],
	['channel_id', [3], 0],
	['children_max', [2], 0],
	['children_max', [2], 0],
	['children_max', [2], 0],
	['children_min', [2], 0],
	['children_min', [2], 0],
	['children_min', [2], 0],
	['city', [3], 0],
	['close', [2], 0],
	['code', [2], 0],
	['copyright', [3], 0],
	['count', [2], 0],
	['count', [2], 0],
	['country', [3], 0],
	['date', [1], 0],
	['date', [1], 0],
	['date_end', [1], 0],
	['date_start', [1], 0],
	['days_arrival', [2], 0],
	['days_arrival', [2], 0],
	['days_arrival_max', [2], 0],
	['days_arrival_max', [2], 0],
	['days_arrival_max', [2], 0],
	['days_arrival_min', [2], 0],
	['days_arrival_min', [2], 0],
	['days_arrival_min', [2], 0],
	['days_departure', [2], 0],
	['days_departure', [2], 0],
	['days_dur_max', [2], 0],
	['days_dur_max', [2], 0],
	['days_dur_min', [2], 0],
	['days_dur_min', [2], 0],
	['departure', [2], 0],
	['description', [3], 0],
	['description', [3], 0],
	['description', [3], 0],
	['description', [3], 0],
	['dining_rooms', [2], 0],
	['distance', [2], 0],
	['email', [3], 0],
	['fax', [3], 0],
	['features', [2], 0],
	['features', [2], 0],
	['free', [2], 0],
	['from', [3], 0],
	['from_price', [2], 0],
	['headline', [3], 0],
	['holes', [2], 0],
	['iban', [3], 0],
	['id', [2], 0],
	['id', [2], 0],
	['id', [3], 0],
	['id', [2], 0],
	['id_area', [2], 0],
	['id_bok', [2], 0],
	['id_city', [2], 0],
	['id_community', [2], 0],
	['id_exp', [2], 0],
	['id_hrs', [2], 0],
	['id_htl', [2], 0],
	['id_lts', [3], 0],
	['id_pos', [3], 0],
	['id_region', [2], 0],
	['language', [3], 0],
	['latitude', [2], 0],
	['living_rooms', [2], 0],
	['longitude', [2], 0],
	['max', [2], 0],
	['max', [2], 0],
	['max', [2], 0],
	['max_arrival', [2], 0],
	['message', [3], 0],
	['methods', [2], 0],
	['methods', [2], 0],
	['min', [2], 0],
	['min', [2], 0],
	['min', [2], 0],
	['min_arrival', [2], 0],
	['name', [3], 0],
	['name', [3], 0],
	['name_area', [3], 0],
	['name_city', [3], 0],
	['name_community', [3], 0],
	['name_region', [3], 0],
	['number', [3], 0],
	['number', [3], 0],
	['obj_id', [2], 0],
	['offer_base_id', [2], 0],
	['offer_base_id', [2], 0],
	['offer_description', [3], 0],
	['offer_gid', [2], 0],
	['offer_id', [2], 0],
	['offer_id', [2], 0],
	['offer_id', [2], 0],
	['offer_id', [2], 0],
	['offer_show', [2], 0],
	['offer_title', [3], 0],
	['offer_typ', [2], 0],
	['offer_typ', [2], 0],
	['offer_typ', [2], 0],
	['pers_age_min', [2], 0],
	['pers_age_min', [2], 0],
	['phone', [3], 0],
	['prepayment', [2], 0],
	['price_ai', [2], 0],
	['price_amount', [2], 0],
	['price_bb', [2], 0],
	['price_description', [3], 0],
	['price_engine', [2], 0],
	['price_fb', [2], 0],
	['price_from', [2], 0],
	['price_from', [2], 0],
	['price_hb', [2], 0],
	['price_id', [2], 0],
	['price_supplement', [2], 0],
	['price_title', [3], 0],
	['price_total', [2], 0],
	['price_typ', [2], 0],
	['price_value', [2], 0],
	['price_ws', [2], 0],
	['prl_mode', [2], 0],
	['prl_unit', [2], 0],
	['provider', [3], 0],
	['result_id', [3], 0],
	['room_code', [3], 0],
	['room_description', [3], 0],
	['room_free', [2], 0],
	['room_id', [2], 0],
	['room_id', [2], 0],
	['room_lts_id', [2], 0],
	['room_persons', [3], 0],
	['room_seq', [2], 0],
	['room_title', [3], 0],
	['room_total', [2], 0],
	['room_type', [2], 0],
	['root', [47], 0],
	['service', [2], 0],
	['service', [2], 0],
	['service', [2], 0],
	['source', [3], 0],
	['special_premium', [2], 0],
	['special_typ', [2], 0],
	['special_typ', [2], 0],
	['stars', [2], 0],
	['status', [2], 0],
	['std', [2], 0],
	['std', [2], 0],
	['street', [3], 0],
	['supplement', [2], 0],
	['swift', [3], 0],
	['time', [2], 0],
	['time', [3], 0],
	['title', [3], 0],
	['title', [3], 0],
	['title', [3], 0],
	['title', [3], 0],
	['title', [3], 0],
	['title', [3], 0],
	['title', [3], 0],
	['title', [3], 0],
	['to', [3], 0],
	['total', [2], 0],
	['type', [2], 0],
	['unit', [2], 0],
	['url', [3], 0],
	['url_streetview', [3], 0],
	['valid', [2], 0],
	['valid_end', [1], 0],
	['valid_start', [1], 0],
	['value', [2], 0],
	['web', [3], 0],
	['zip', [3], 0],
	['zipcode', [3], 0],
	['address', [4], 0],
	['bank', [5], 0],
	['base_price', [33], 0],
	['channel', [6], 0],
	['check_in', [7], 0],
	['check_out', [7], 0],
	['contact', [8], 0],
	['day', [9], 0],
	['days', [10], 0],
	['error', [11], 0],
	['feature', [12], 0],
	['features_view', [13], 0],
	['features_view', [13], 0],
	['gallery', [29], 0],
	['geolocation', [14], 0],
	['header', [15], 0],
	['hotel', [16], 0],
	['hotel', [16], 0],
	['hotel_payment', [17], 0],
	['hotels', [18], 0],
	['inclusive', [33], 0],
	['location', [19], 0],
	['location_name', [20], 0],
	['logo', [29], 0],
	['lts_data', [21], 0],
	['matching', [22], 0],
	['occupancy', [23], 0],
	['offer', [24], 0],
	['offer_description', [25], 0],
	['online_payment', [26], 0],
	['paging', [27], 0],
	['picture', [28], 0],
	['pictures', [29], 0],
	['pictures', [29], 0],
	['pictures', [29], 0],
	['pictures', [29], 0],
	['pictures', [29], 0],
	['pos', [30], 0],
	['price', [31], 0],
	['price', [31], 0],
	['price', [45], 0],
	['price_details', [33], 0],
	['price_inclusive', [31], 0],
	['price_total', [31], 0],
	['pricelist', [32], 0],
	['properties', [34], 0],
	['rating', [35], 0],
	['ratings', [36], 0],
	['restriction', [37], 0],
	['restrictions', [38], 0],
	['result', [39], 0],
	['room', [40], 0],
	['room_description', [41], 0],
	['room_detail', [42], 0],
	['room_details', [43], 0],
	['room_numbers', [44], 0],
	['room_price', [46], 0],
	['room_price', [31], 0],
	['season', [48], 0],
	['season', [48], 0],
	['seasons', [49], 0],
	['service_price', [33], 0],
	['services', [50], 0],
	['special', [51], 0],
	['theme', [52], 0],
	['themes', [53], 0],
	['themes', [53], 0]
]);