// HARGAI CREATOR...!!!
// KING OF BEAR
// OPEN JASA RUN BOT WHATSAPP
// OPEN PEMBUATAN BOT WHATSAPP
// OPEN SEWA BOT WHATSAPP
// OPEN PEMBELIAN API KEY
// MINAT WA : wa.me/6288279268363

function _0x395a(_0x280861, _0x3fc5d9)
{
	const _0x55f0be = _0x55f0();
	return _0x395a = function (_0x395a0c, _0xa92084)
	{
		_0x395a0c = _0x395a0c - 0x1ee;
		let _0x3591a0 = _0x55f0be[_0x395a0c];
		return _0x3591a0;
	}, _0x395a(_0x280861, _0x3fc5d9);
}
const _0x53a081 = _0x395a;
(function (_0x32ed40, _0x350825)
{
	const _0x34ddc8 = _0x395a,
		_0xa287df = _0x32ed40();
	while (!![])
	{
		try
		{
			const _0x42677c = parseInt(_0x34ddc8(0x246)) / 0x1 * (parseInt(_0x34ddc8(0x22a)) / 0x2) + parseInt(_0x34ddc8(0x236)) / 0x3 * (parseInt(_0x34ddc8(0x20a)) / 0x4) + -parseInt(_0x34ddc8(0x225)) / 0x5 * (parseInt(_0x34ddc8(0x21f)) / 0x6) + -parseInt(_0x34ddc8(0x209)) / 0x7 + -parseInt(_0x34ddc8(0x23f)) / 0x8 * (parseInt(_0x34ddc8(0x21b)) / 0x9) + parseInt(_0x34ddc8(0x1f8)) / 0xa + -parseInt(_0x34ddc8(0x214)) / 0xb * (parseInt(_0x34ddc8(0x20b)) / 0xc);
			if (_0x42677c === _0x350825) break;
			else _0xa287df['push'](_0xa287df['shift']());
		}
		catch (_0x45547c)
		{
			_0xa287df['push'](_0xa287df['shift']());
		}
	}
}(_0x55f0, 0xdfea5));
const
{
	WAConnection,
	MessageType,
	Presence,
	Mimetype,
	GroupSettingChange
} = require(_0x53a081(0x22b)), fs = require('fs'),
{
	wait,
	simih,
	getBuffer,
	h2k,
	generateMessageID,
	getGroupAdmins,
	getRandom,
	start,
	info,
	success,
	banner,
	close
} = require(_0x53a081(0x218)),
{
	color
} = require(_0x53a081(0x259)), welcome = JSON[_0x53a081(0x231)](fs[_0x53a081(0x223)](_0x53a081(0x249)));
number = _0x53a081(0x23d), require(_0x53a081(0x21a)), nocache(_0x53a081(0x21a), _0x11c750 => console['log'](_0x11c750 + _0x53a081(0x1f2))), global[_0x53a081(0x1fc)] = (_0x586490, _0x5edd8f = '/', _0x502a4f = {}, _0x2f050b) => (_0x586490 in global[_0x53a081(0x23a)] ? global[_0x53a081(0x23a)][_0x586490] : _0x586490) + _0x5edd8f + (_0x502a4f || _0x2f050b ? '?' + new URLSearchParams(Object[_0x53a081(0x233)](
{
	..._0x502a4f,
	..._0x2f050b ?
	{
		[_0x2f050b]: global['APIKeys'][_0x586490 in global['APIs'] ? global[_0x53a081(0x23a)][_0x586490] : _0x586490]
	} :
	{}
})) : '');
const starts = async (_0x2d1b30 = new WAConnection()) =>
{
	const _0x1c1a6f = _0x53a081;
	_0x2d1b30[_0x1c1a6f(0x239)]['level'] = _0x1c1a6f(0x257), _0x2d1b30[_0x1c1a6f(0x247)] = [0x2, 0x85f, 0x3], _0x2d1b30[_0x1c1a6f(0x212)] = [_0x1c1a6f(0x23e), 'Firefox', '3.0'], console['log'](banner[_0x1c1a6f(0x25f)]), console[_0x1c1a6f(0x205)](color(_0x1c1a6f(0x24b))), console[_0x1c1a6f(0x205)](color(_0x1c1a6f(0x237))), console[_0x1c1a6f(0x205)](color(_0x1c1a6f(0x1ee))), console[_0x1c1a6f(0x205)](color(_0x1c1a6f(0x24f))), console['log'](color(_0x1c1a6f(0x210))), console[_0x1c1a6f(0x205)](color(_0x1c1a6f(0x24e))), console['log'](color(_0x1c1a6f(0x243))), console[_0x1c1a6f(0x205)](color(' ===============================================')), _0x2d1b30['on']('qr', () =>
	{
		const _0x108477 = _0x1c1a6f;
		console[_0x108477(0x205)](color('[', _0x108477(0x222)), color('!', 'red'), color(']', _0x108477(0x222)), color(_0x108477(0x25d)));
	}), fs[_0x1c1a6f(0x241)]('./session/qrsession.json') && _0x2d1b30['loadAuthInfo'](_0x1c1a6f(0x206)), _0x2d1b30['on'](_0x1c1a6f(0x215), () =>
	{
		start('2', 'Sedang Menyambungkan Mohon Tunggu...');
	}), _0x2d1b30['on'](_0x1c1a6f(0x1f5), () =>
	{
		const _0x4f9844 = _0x1c1a6f;
		success('2', _0x4f9844(0x260));
	}), await _0x2d1b30[_0x1c1a6f(0x20c)](
	{
		'timeoutMs': 0x1e * 0x3e8
	}), fs['writeFileSync'](_0x1c1a6f(0x206), JSON['stringify'](_0x2d1b30['base64EncodedAuthInfo'](), null, '\x09')), _0x2d1b30['on'](_0x1c1a6f(0x217), async _0x14a1e4 =>
	{
		require('./srv/zero.js')(_0x2d1b30, _0x14a1e4);
	});
	const _0x199b2c = async (_0x4d2f6b, _0x45a769, _0x336438, _0x1b6e15, _0x40b064 = [], _0x50d797 = {}) =>
	{
		const _0x3d0627 = _0x1c1a6f;
		kma = _0x1b6e15, mhan = await _0x2d1b30[_0x3d0627(0x1f4)](_0x4d2f6b, kma, MessageType['image']), buttonMessages = {
			'imageMessage': mhan[_0x3d0627(0x201)][_0x3d0627(0x258)],
			'contentText': _0x45a769,
			'footerText': _0x336438,
			'buttons': _0x40b064,
			'headerType': 0x4
		}, _0x2d1b30[_0x3d0627(0x1f1)](_0x4d2f6b, buttonMessages, MessageType['buttonsMessage'], _0x50d797);
	};
	_0x2d1b30['on'](_0x1c1a6f(0x234), async _0xaadd27 =>
	{
		const _0x3fbc1e = _0x1c1a6f;
		try
		{
			var _0x27b30c = await _0x2d1b30[_0x3fbc1e(0x1ff)](_0xaadd27[_0x3fbc1e(0x245)]);
			groupMet = await _0x2d1b30[_0x3fbc1e(0x1ff)](_0xaadd27[_0x3fbc1e(0x245)]), groupMembers = groupMet[_0x3fbc1e(0x238)], groupAdmins = getGroupAdmins(groupMembers), mem = _0xaadd27[_0x3fbc1e(0x238)][0x0], console['log'](_0xaadd27);
			try
			{
				pp_user = await _0x2d1b30[_0x3fbc1e(0x253)](mem);
			}
			catch (_0x3dc1fe)
			{
				pp_user = _0x3fbc1e(0x1f6);
			}
			try
			{
				pp_grup = await _0x2d1b30[_0x3fbc1e(0x253)](_0xaadd27[_0x3fbc1e(0x245)]);
			}
			catch (_0x322463)
			{
				pp_grup = _0x3fbc1e(0x263);
			}
			_0xaadd27[_0x3fbc1e(0x200)] == 'add' && mem[_0x3fbc1e(0x22d)](_0x2d1b30['user'][_0x3fbc1e(0x245)]) && _0x2d1b30[_0x3fbc1e(0x1f1)](_0xaadd27[_0x3fbc1e(0x245)], _0x3fbc1e(0x256), _0x3fbc1e(0x262));
			if (_0xaadd27[_0x3fbc1e(0x200)] == _0x3fbc1e(0x1fd))
			{
				num = _0xaadd27[_0x3fbc1e(0x238)][0x0];
				let _0x34b573 = _0x2d1b30[_0x3fbc1e(0x229)][num] ||
				{
					'notify': num[_0x3fbc1e(0x227)](/@.+/, '')
				};
				anu_user = _0x34b573['vname'] || _0x34b573[_0x3fbc1e(0x255)] || num[_0x3fbc1e(0x221)]('@')[0x0];
				try
				{
					ppUr = await _0x2d1b30[_0x3fbc1e(0x253)](anu_user);
				}
				catch
				{
					ppUrl = _0x3fbc1e(0x1f6);
				}
				img = await getBuffer(ppUrl), teks = _0x3fbc1e(0x25e) + anu_user + _0x3fbc1e(0x242) + _0x27b30c['subject'] + _0x3fbc1e(0x23b), _0x199b2c(_0xaadd27[_0x3fbc1e(0x245)], teks, _0x3fbc1e(0x224), img, but = [
				{
					'buttonId': _0x3fbc1e(0x21c),
					'buttonText':
					{
						'displayText': _0x3fbc1e(0x21e)
					},
					'type': 0x1
				}], options = {
					'contextInfo':
					{
						'mentionedJid': [num, number]
					},
					'thumbnail': Buffer['alloc'](0x0)
				});
			}
			else
			{
				if (_0xaadd27[_0x3fbc1e(0x200)] == _0x3fbc1e(0x228))
				{
					num = _0xaadd27[_0x3fbc1e(0x238)][0x0];
					try
					{
						ppUrl = await _0x2d1b30[_0x3fbc1e(0x253)](num);
					}
					catch
					{
						ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png';
					}
					img = await getBuffer(ppUrl), teks = _0x3fbc1e(0x207) + num[_0x3fbc1e(0x221)]('@')[0x0] + _0x3fbc1e(0x211) + _0x27b30c[_0x3fbc1e(0x240)], _0x199b2c(_0xaadd27['jid'], teks, _0x3fbc1e(0x224), img, but = [
					{
						'buttonId': _0x3fbc1e(0x230),
						'buttonText':
						{
							'displayText': 'SELAMAT TINGGAL!!!'
						},
						'type': 0x1
					}], options = {
						'contextInfo':
						{
							'mentionedJid': [num, number]
						},
						'thumbnail': Buffer[_0x3fbc1e(0x251)](0x0)
					});
				}
			}
			if (_0xaadd27[_0x3fbc1e(0x200)] == _0x3fbc1e(0x25a))
			{
				anu_user = _0x2d1b30[_0x3fbc1e(0x229)][mem], num = _0xaadd27['participants'][0x0];
				try
				{
					ppimg = await _0x2d1b30[_0x3fbc1e(0x253)](_0xaadd27['participants'][0x0][_0x3fbc1e(0x221)]('@')[0x0] + '@c.us');
				}
				catch
				{
					ppimg = _0x3fbc1e(0x24c);
				}
				let _0x21982f = await getBuffer(ppimg);
				teks = '@' + num[_0x3fbc1e(0x221)]('@')[0x0] + ' Telah dipromote', _0x2d1b30[_0x3fbc1e(0x1f1)](_0x27b30c['id'], teks, MessageType['text']);
			}
			if (_0xaadd27[_0x3fbc1e(0x200)] == _0x3fbc1e(0x1f9))
			{
				anu_user = _0x2d1b30[_0x3fbc1e(0x229)][mem], num = _0xaadd27[_0x3fbc1e(0x238)][0x0];
				const _0x1482f2 = await _0x2d1b30[_0x3fbc1e(0x1ff)](_0xaadd27[_0x3fbc1e(0x245)]);
				try
				{
					ppimg = await _0x2d1b30[_0x3fbc1e(0x253)](_0xaadd27['participants'][0x0][_0x3fbc1e(0x221)]('@')[0x0] + '@c.us');
				}
				catch
				{
					ppimg = _0x3fbc1e(0x24c);
				}
				let _0x42a90a = await getBuffer(_0x3fbc1e(0x20e) + anu_user['notify'] + _0x3fbc1e(0x261) + ppimg + _0x3fbc1e(0x1fe));
				teks = '@' + num['split']('@')[0x0] + _0x3fbc1e(0x1fa), _0x2d1b30[_0x3fbc1e(0x1f1)](_0x1482f2['id'], teks, MessageType[_0x3fbc1e(0x25b)]);
			}
		}
		catch (_0x109808)
		{
			console[_0x3fbc1e(0x205)](_0x109808);
		}
	}), _0x2d1b30['on'](_0x1c1a6f(0x202), async _0x281497 =>
	{
		const _0x240481 = _0x1c1a6f;
		metdata = await _0x2d1b30['groupMetadata'](_0x281497[_0x240481(0x245)]);
		if (_0x281497['announce'] == 'false') teks = _0x240481(0x20d), _0x2d1b30['sendMessage'](metdata['id'], teks, MessageType[_0x240481(0x25b)]), console[_0x240481(0x205)](_0x240481(0x220) + metdata[_0x240481(0x240)]);
		else
		{
			if (_0x281497['announce'] == 'true') teks = _0x240481(0x24d), _0x2d1b30[_0x240481(0x1f1)](metdata['id'], teks, MessageType[_0x240481(0x25b)]), console[_0x240481(0x205)](_0x240481(0x216) + metdata[_0x240481(0x240)]);
			else
			{
				if (!_0x281497[_0x240481(0x21d)] == '') tag = _0x281497[_0x240481(0x1fb)]['split']('@')[0x0] + _0x240481(0x235), teks = _0x240481(0x23c) + _0x281497[_0x240481(0x1fb)][_0x240481(0x221)]('@')[0x0] + _0x240481(0x22e) + _0x281497[_0x240481(0x21d)], _0x2d1b30['sendMessage'](metdata['id'], teks, MessageType[_0x240481(0x25b)],
				{
					'contextInfo':
					{
						'mentionedJid': [tag]
					}
				}), console['log'](_0x240481(0x25c) + metdata[_0x240481(0x240)]);
				else
				{
					if (_0x281497[_0x240481(0x20f)] == 'false') teks = _0x240481(0x1f7), _0x2d1b30[_0x240481(0x1f1)](metdata['id'], teks, MessageType[_0x240481(0x25b)]), console[_0x240481(0x205)](_0x240481(0x250) + metdata[_0x240481(0x240)]);
					else _0x281497['restrict'] == _0x240481(0x24a) && (teks = _0x240481(0x213), _0x2d1b30[_0x240481(0x1f1)](metdata['id'], teks, MessageType['text']), console['log'](_0x240481(0x208) + metdata['subject']));
				}
			}
		}
	}), antical = !![], _0x2d1b30['on'](_0x1c1a6f(0x203), _0x566784 =>
	{
		const _0x160bb8 = _0x1c1a6f;
		if (antical === ![]) return;
		let _0x439995;
		calling = JSON[_0x160bb8(0x231)](JSON[_0x160bb8(0x1f3)](_0x566784)), _0x439995 = calling[0x1][_0x160bb8(0x232)], _0x2d1b30[_0x160bb8(0x1f1)](_0x439995, _0x160bb8(0x248) + _0x2d1b30[_0x160bb8(0x22c)]['name'] + ' can\'t receive calls.*\x0a*Call = Block!*', MessageType['text'])[_0x160bb8(0x1ef)](() => _0x2d1b30[_0x160bb8(0x254)](_0x439995, _0x160bb8(0x1fd)));
	}), _0x2d1b30['on']('CB:Blocklist', _0x389b8e =>
	{
		const _0x240726 = _0x1c1a6f;
		if (blocked[_0x240726(0x244)] > 0x2) return;
		for (let _0x147e05 of _0x389b8e[0x1][_0x240726(0x219)])
		{
			blocked[_0x240726(0x1f0)](_0x147e05[_0x240726(0x227)](_0x240726(0x204), _0x240726(0x22f)));
		}
	});
};

function nocache(_0x37878c, _0x49577c = () =>
{})
{
	const _0x29e5ff = _0x53a081;
	console['log']('Module', '\'' + _0x37878c + '\'', 'Di pantau oleh King Of Bear'), fs[_0x29e5ff(0x226)](require[_0x29e5ff(0x252)](_0x37878c), async () =>
	{
		const _0x7c051c = _0x29e5ff;
		await uncache(require[_0x7c051c(0x252)](_0x37878c)), _0x49577c(_0x37878c);
	});
}

function uncache(_0x403031 = '.')
{
	return new Promise((_0x2b313e, _0x44bc5d) =>
	{
		const _0x5b4dc0 = _0x395a;
		try
		{
			delete require['cache'][require[_0x5b4dc0(0x252)](_0x403031)], _0x2b313e();
		}
		catch (_0x581b7e)
		{
			_0x44bc5d(_0x581b7e);
		}
	});
}
starts();

function _0x55f0()
{
	const _0x142b76 = ['2833443NUcRdc', 'hallo', 'desc', 'SELAMAT DATANG!!!', '3558iwUoIk', '- [ Group Opened ] - In ', 'split', 'white', 'readFileSync', '©Created By King Of Bear', '1865OIBvlw', 'watchFile', 'replace', 'remove', 'contacts', '1646KftvNN', '@adiwajshing/baileys', 'user', 'includes', '\x0a𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑩𝒂𝒓𝒖 : ', 's.whatsapp.net', 'byebye', 'parse', 'from', 'entries', 'group-participants-update', '@s.whatsapp.net', '9837CQqIAM', 'Please Follow Me On Sosial Media', 'participants', 'logger', 'APIs', '\x0a\x0aSemoga Betah Ya Di Group Ini', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\x0a\x0a𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒖𝒃𝒂𝒉 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏 @', '6285608625102@s.whatsapp.net', 'Bear', '8FaMGHo', 'subject', 'existsSync', '\x0aSelamat Datang Di Group: ', '│ ○ Github : https://github.com/SaipulAnuar                   ', 'length', 'jid', '1943zSJrSo', 'version', '*Sorry ', './storage/welcome.json', 'true', '[•] [ BASE BY ZEROYT7 ] [•]', 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲𝗱 ] -\x0a\x0a𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑻𝒖𝒕𝒖𝒑 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\x0a𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏', '│ ○ Tiktok : https://tiktok.com/@raraharsita2                   ', '│ ○ Youtube : https://www.youtube.com/channel/UCu3cFVCT9rHD1spardoP93g                  ', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ', 'alloc', 'resolve', 'getProfilePicture', 'blockUser', 'notify', '𝙷𝚊𝚢!.. 𝚂𝚊𝚢𝚊 𝚈𝚞𝚒-𝙲𝚑𝚊𝚗 𝚂𝚊𝚢𝚊 𝙰𝚔𝚊𝚗 𝙼𝚎𝚖𝚋𝚊𝚗𝚝𝚞 𝙼𝚎𝚖𝚙𝚛𝚛𝚖𝚞𝚍𝚊𝚑 𝙺𝚒𝚗𝚎𝚛𝚓𝚊 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚂𝚎𝚙𝚎𝚛𝚝𝚒 𝙼𝚎𝚖𝚋𝚞𝚊𝚝 𝚂𝚝𝚒𝚔𝚎𝚛 𝙳𝚊𝚗 𝙻𝚊𝚒𝚗 𝙻𝚊𝚒𝚗', 'warn', 'imageMessage', './mess/color', 'promote', 'text', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ', 'Please... Scan Is Now Qr Code !', 'Hallo @', 'string', 'Bot Telah Tersambung... Jangan Lupa Subscribe King Of Bear', '&msg=selamat%20menjadi%20admin&mem=5&picurl=', 'conversation', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60', ' ===============================================', 'then', 'push', 'sendMessage', ' Telah Di Updated... Jangan Lupa Subscribe King Of Bear', 'stringify', 'prepareMessage', 'open', 'https://telegra.ph/file/c9dfa715c26518201f478.jpg', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\x0a\x0a𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒃𝒖𝒌𝒂 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\x0a𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊', '17504020tDOKEl', 'demote', ' Telah didemote', 'descOwner', 'API', 'add', '&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg', 'groupMetadata', 'action', 'message', 'group-update', 'CB:Call', 'c.us', 'log', './session/qrsession.json', 'Bye Bye @', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝙄𝙣 ', '573713RsXdkd', '428zZkawL', '265128OXMpXK', 'connect', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗢𝗽𝗲𝗻𝗲𝗱 ] -\x0a\x0a𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑩𝒖𝒌𝒂 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\x0a𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏', 'https://gatauajg.yogipw.repl.co/api/demote?name=', 'restrict', '│ ○ Instagram : https://instagram.com/drak_ipul123               ', '\x0aSelamat Tinggal Di Group: ', 'browserDescription', '- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\x0a\x0a𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒕𝒖𝒕𝒖𝒑 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\x0a𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝑮𝒓𝒐𝒖𝒑 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊', '1078zpnEhD', 'connecting', '- [ Group Closed ] - In ', 'chat-update', './mess/myfunc', 'blocklist', './srv/zero.js'];
	_0x55f0 = function ()
	{
		return _0x142b76;
	};
	return _0x55f0();
}